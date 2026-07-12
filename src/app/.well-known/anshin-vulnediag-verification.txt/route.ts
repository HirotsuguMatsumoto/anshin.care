const verificationPath = "/.well-known/anshin-vulnediag-verification.txt";

const normalizePath = (path: string) => {
  try {
    return new URL(path, "https://www.anshin.care").pathname;
  } catch {
    return path.startsWith("/") ? path : `/${path}`;
  }
};

export const dynamic = "force-dynamic";

export function GET() {
  const configuredPath = process.env.VULNE_VERIFICATION_TEXT_PATH;
  const verificationText = process.env.VULNE_VERIFICATION_TEXT_VALUE?.trim();

  if (configuredPath && normalizePath(configuredPath) !== verificationPath) {
    return new Response("Verification path is not configured for this route.", {
      status: 404,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }

  if (!verificationText) {
    return new Response("Verification text is not configured.", {
      status: 500,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }

  return new Response(verificationText, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}
