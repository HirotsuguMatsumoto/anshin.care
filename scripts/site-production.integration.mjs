import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import { once } from "node:events";
import net from "node:net";

async function availablePort() {
  const server = net.createServer();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;
  server.close();
  await once(server, "close");
  return port;
}

async function waitForPage(url) {
  let lastError;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw lastError ?? new Error("site did not become ready");
}

const productionEnv = {
  ...process.env,
  NODE_ENV: "production",
  VERCEL_ENV: "production",
  NEXT_TELEMETRY_DISABLED: "1"
};

execFileSync(process.execPath, ["node_modules/next/dist/bin/next", "build"], {
  cwd: new URL("../", import.meta.url),
  env: productionEnv,
  stdio: "inherit"
});

const port = await availablePort();
const child = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)],
  {
    cwd: new URL("../", import.meta.url),
    env: productionEnv,
    stdio: ["ignore", "pipe", "pipe"]
  }
);

let logs = "";
child.stdout.on("data", (chunk) => { logs += chunk.toString(); });
child.stderr.on("data", (chunk) => { logs += chunk.toString(); });

try {
  const response = await waitForPage(`http://127.0.0.1:${port}/`);
  const html = await response.text();

  assert.match(html, /5(?:<!-- -->)?つのサービスを見る/);
  assert.match(html, /system-consulting\.ads\.anshin\.care/);
  assert.match(html, /pr1\.ads\.anshin\.care/);
  assert.equal((html.match(/data-service-card="true"/g) ?? []).length, 5);
} catch (error) {
  process.stderr.write(logs);
  throw error;
} finally {
  child.kill("SIGTERM");
  await Promise.race([
    once(child, "exit"),
    new Promise((resolve) => setTimeout(resolve, 3000))
  ]);
}

process.stdout.write("[site-production.integration] OK\n");
