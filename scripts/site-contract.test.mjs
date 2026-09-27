import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const pageSource = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");

test("the system consulting card is always present and links to the dedicated HTTPS site", () => {
  const consulting = pageSource.indexOf('title: "システムコンサル"');
  const app = pageSource.indexOf('title: "アンシンアプリ"');

  assert.notEqual(consulting, -1);
  assert.ok(consulting < app);
  assert.match(pageSource, /https:\/\/system-consulting\.ads\.anshin\.care\//);
  assert.match(pageSource, /utm_source=anshin_care/);
  assert.doesNotMatch(pageSource, /NEXT_PUBLIC_SYSTEM_CONSULTING_RELEASE_CONFIRMED/);
});

test("the service grid communicates five services in rows of up to three", () => {
  const serviceTitles = [...pageSource.matchAll(/title: "(システムコンサル|アンシンアプリ|アンシンアプリ 無料サービス|介護テクノロジー|アンシン脆弱性診断)"/g)];

  assert.equal(serviceTitles.length, 5);
  assert.match(pageSource, /services\.length.*つのサービスを見る/);
  assert.match(pageSource, /https:\/\/pr1\.ads\.anshin\.care\//);
  assert.match(pageSource, /sx=\{\{ justifyContent: "center" \}\}/);
  assert.match(pageSource, /size=\{\{ xs: 12, sm: 6, md: 4 \}\}/);
  assert.doesNotMatch(pageSource, /<Button[\s\S]{0,220}variant="contained"/);
});
