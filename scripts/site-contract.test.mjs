import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const pageSource = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");

test("the system consulting card is first and links to the dedicated HTTPS site", () => {
  const consulting = pageSource.indexOf('title: "システムコンサル"');
  const app = pageSource.indexOf('title: "アンシンアプリ"');

  assert.notEqual(consulting, -1);
  assert.ok(consulting < app);
  assert.match(pageSource, /https:\/\/system-consulting\.ads\.anshin\.care\//);
  assert.match(pageSource, /utm_source=anshin_care/);
  assert.match(pageSource, /NEXT_PUBLIC_SYSTEM_CONSULTING_RELEASE_CONFIRMED/);
});

test("the service grid communicates four services and keeps action buttons outlined", () => {
  const serviceTitles = [...pageSource.matchAll(/title: "(システムコンサル|アンシンアプリ|介護テクノロジー|アンシン脆弱性診断)"/g)];

  assert.equal(serviceTitles.length, 4);
  assert.match(pageSource, /services\.length.*つのサービスを見る/);
  assert.doesNotMatch(pageSource, /<Button[\s\S]{0,220}variant="contained"/);
});
