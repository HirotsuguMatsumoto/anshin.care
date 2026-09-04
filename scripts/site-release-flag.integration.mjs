import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import { once } from "node:events";
import net from "node:net";

async function port() { const server = net.createServer(); server.listen(0, "127.0.0.1"); await once(server, "listening"); const value = server.address().port; server.close(); await once(server, "close"); return value; }
async function check(flag, expectedCount) {
  const productionEnv = { ...process.env, NODE_ENV: "production", VERCEL_ENV: "production", NEXT_PUBLIC_SYSTEM_CONSULTING_RELEASE_CONFIRMED: flag, NEXT_TELEMETRY_DISABLED: "1" };
  execFileSync("pnpm", ["build"], { cwd: new URL("../", import.meta.url), env: productionEnv, stdio: "ignore" });
  const value = await port();
  const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(value)], { cwd: new URL("../", import.meta.url), env: productionEnv, stdio: ["ignore", "pipe", "pipe"] });
  let logs = ""; child.stdout.on("data", (chunk) => { logs += chunk.toString(); }); child.stderr.on("data", (chunk) => { logs += chunk.toString(); });
  try {
    let response;
    for (let attempt = 0; attempt < 60; attempt += 1) { try { response = await fetch(`http://127.0.0.1:${value}/`); if (response.ok) break; } catch {} await new Promise((resolve) => setTimeout(resolve, 250)); }
    assert.ok(response?.ok, logs);
    const html = await response.text();
    assert.match(html, new RegExp(`${expectedCount}(?:<!-- -->)?つのサービスを見る`));
    if (expectedCount === 3) assert.doesNotMatch(html, /system-consulting\.ads\.anshin\.care/);
    else assert.match(html, /system-consulting\.ads\.anshin\.care/);
  } finally { child.kill("SIGTERM"); await Promise.race([once(child, "exit"), new Promise((resolve) => setTimeout(resolve, 3000))]); }
}
await check("false", 3);
await check("true", 4);
process.stdout.write("[site-release-flag.integration] OK\n");
