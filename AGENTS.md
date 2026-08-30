# AI Agent Operating Rules

## 専門用語一覧

| 用語 | 正式名称・読み方 | 意味・本書での扱い |
| --- | --- | --- |
| AI | Artificial Intelligence | 人工知能。学習、推論及び生成等を行う技術の総称 |
| Git | Git | ファイルの変更履歴とブランチを管理する分散型バージョン管理システム |
| UI | User Interface | 利用者がシステムの情報を見て操作する画面・操作要素 |
| UX | User Experience | 利用者が製品・serviceの利用前後に得る体験全体 |
| SPA | Single-Page Application | 画面全体を再読込みせずclient側で表示を切り替えるWeb application |
| MD | Markdown | 見出し、表、link等をplain textで記述する文書形式 |
| 障害福祉 | しょうがいふくし | 障害のある人の地域生活・社会参加を支えるserviceと制度の総称 |
| CSS | Cascading Style Sheets | Webページの見た目や配置を定義するスタイル言語 |
| MUI | Material UI | React向けのUI component library |
| SEO | Search Engine Optimization | 検索エンジンがコンテンツを理解・評価しやすくする最適化 |
| 介護保険 | かいごほけん | 要介護・要支援者へ必要な介護serviceを給付する公的保険制度 |
| PoC | Proof of Concept | 限定した範囲で実現可能性、効果及びリスクを検証する取組 |
| JavaScript | JavaScript | Webブラウザ及びserver等で実行されるプログラミング言語 |
| LTS | Long-Term Support | 長期間の保守・security updateが提供されるrelease区分 |
| Next.js | Next.js | Reactを基盤とするWebアプリケーションフレームワーク |
| TypeScript | TypeScript | JavaScriptに静的な型機能等を追加したプログラミング言語 |
| backend | Backend | server側でAPI、業務処理及びdata管理等を担うsoftware領域 |
| API | Application Programming Interface | システムやソフトウェア間で機能・データを利用するための接続仕様 |
| DB | Database | 業務データを永続的に保存・検索するデータベース |
| frontend | Frontend | 利用者が直接操作する画面及びclient側処理を担うsoftware領域 |
| DNS | Domain Name System | domain nameとIP address等の情報を対応付ける分散system |
| OAuth 2.0 | OAuth 2.0 Authorization Framework | 利用者のpasswordを共有せず、限定した権限をtokenで委任する枠組み |
| schema | Schema | dataの項目、型、制約及び構造を定義したもの |
| Docker | Docker | アプリケーションと依存関係をcontainerとして実行・配布する基盤 |
| PostgreSQL | PostgreSQL | open sourceのリレーショナルデータベース管理システム |

最優先: `.env`、`.env.*`、`.env.production`、`.env.production.*`、その他 secret / 環境変数ファイルは、ユーザーが対象ファイル・目的・変更内容を明示して許可した場合に限り編集してよい。許可がない場合は編集・生成・上書き・削除・整形・置換・コピーを禁止する。値を表示する場合は secret を露出せず、必要最小限の分類確認に留める。
最優先: `.env` 系ファイルは全て Git ignore 対象にする。各 repo の `.gitignore` には少なくとも `*.env*` と `.env*` を含め、不足している場合は `.env` 本体ではなく ignore 設定を修正する。`.env` 系ファイルを新規 tracking してはいけない。既に tracked されている場合は commit / push 前に secret を表示せず停止し、ユーザーへ除外方針を確認する。
最優先: 回答のみの場合は、冒頭に必ず「分類: 回答のみ。編集しません。」と書け。
最優先: ユーザーが質問・確認・調査をしているだけなら、ファイル編集・生成・整形・設定変更をするな。
最優先: 変更してよいのは「修正して」「実装して」「変更して」「追加して」「消して」「整備して」など成果物変更が明示された時だけ。
最優先: 判断に迷ったら編集せず、まず結論を答えて、実装するか確認しろ。
最優先: UI/UXを実装・修正する場合は、ユーザーが説明文を読まなくても操作対象・操作可否・現在状態・次アクションが一目で分かる見た目、hover/focus/drag/drop 等のフィードバックを必ず実装し、見た目と言動が一致しない文言だけの対応を禁止する。
最優先: UI/UXを実装・修正する場合は、ファイル編集前に必ず「どこに、何を、どの既存実装に合わせて、どう実装し、どう検証するか」の詳細設計をユーザーへ説明し、ユーザーの明示的な実施許可を得るまで編集してはいけない。

このファイルは、`anshin.care` を扱う AI / coding agent が最初に読む repo-local 入口です。

`anshin.care` は、Anshin のサービス群を紹介するシンプルな SPA サイトです。Anshin 本体、アンシン脆弱性診断、新サービス市場調査メモにある介護ロボット・介護テクノロジー構想を、短いキャッチアイと3つのサービス概要カードで伝えることを目的にします。

## 参照元

- `/Users/matsumotoyuuji/dev/anshin/AGENTS.md`
- `/Users/matsumotoyuuji/dev/anshin`
- `/Users/matsumotoyuuji/dev/anshin-vulnediag-infra`
- `/Users/matsumotoyuuji/dev/documents/anshin_new_service_market_research_2026-07-07.md`

作業内容が Anshin 本体、脆弱性診断、認証、本番運用、法務文言、介護・医療・障害福祉の業務仕様に踏み込む場合は、該当 repo / document の具体ルールを読む。

## 毎回の必須チェック

1. ユーザー発話を `回答のみ` / `調査のみ` / `実装依頼` / `運用依頼` / `不明` に分類する。
2. `回答のみ`、`調査のみ`、`不明` では編集しない。結論、理由、実装する場合の方針だけを返す。
3. 実装依頼の場合は、まず `git status --short` と対象ファイルの近傍確認を行う。
4. 既存差分はユーザーの作業として扱い、明示依頼なしに戻さない。
5. 変更は README、`src/app`、`public`、設定ファイルなど、依頼に必要な範囲へ絞る。
6. 検証は変更範囲に合わせて `npm run lint`、`npm run build` を優先する。
7. 報告は、結論、変更ファイル、検証結果、残リスクを短くまとめる。

## UI/UX 実装前の詳細設計説明ゲート

画面、導線、component、layout、route、CSS、MUI / Tailwind styling、状態表示、hover / focus、レスポンシブ挙動を追加・変更する場合は、ファイル編集前に必ずこのゲートで停止する。

- `git status --short`、関連 `rg`、近傍ファイル確認で差分候補を特定した後、編集開始前に詳細設計をユーザーへ説明する。
- 詳細設計には、対象 page / component / file、参照する既存 UI、再利用する MUI / Tailwind / theme、変更するファイルごとの役割、追加・変更する状態、操作可否、loading / empty / error / disabled / hover / focus、mobile / desktop、SEO / 表現ガードへの影響、検証方法、残リスクを含める。
- 詳細設計を説明した後はそこで停止し、ユーザーが「進めて」「その設計で実装して」「実施して」など明示的に再開を許可するまで、ファイル編集、format、生成、build、画面確認へ進まない。
- ユーザーが最初から「詳細設計説明後に承認待ちせず実装して」と明示した場合だけ、説明後に同じターンで実装へ進んでよい。その場合も説明なしに編集してはいけない。

## サイトの責務

- Anshin のサービス全体像を短く紹介する。
- 初期画面は実用ページにする。不要なランディング説明や長い導入文だけで終わらせない。
- カードは以下の3領域を基本にする。
  - アンシンアプリ - 訪問サービス経営支援
  - 介護ロボット・介護テクノロジー
  - アンシン脆弱性診断
- 詳細機能、料金、問い合わせ、ブログ、採用、管理画面は、ユーザーが明示するまで追加しない。

## 表現ガード

- 医療行為、介護保険適用、法的義務、診断結果の完全性を断定しない。
- 「必ず安全」「完全に守る」「事故を防ぐ」などの過剰な保証表現を避ける。
- 脆弱性診断は攻撃的・不安訴求ではなく、信頼性確認と継続改善の文脈で説明する。
- 介護ロボットは既製品販売ではなく、現場課題、PoC、運用設計、アプリ連携、効果測定を中心に説明する。
- 画像や UI に secret、個人情報、実在利用者情報、実在職員情報を入れない。

## 技術方針

- Node.js は v24 LTS 系を前提にする。
- Next.js App Router を使う。
- TypeScript を使う。
- UI は MUI、Tailwind CSS、Material Icons を利用する。
- サイトは静的に成立する構成を優先し、バックエンド API や DB はユーザーが明示するまで追加しない。
- 画像は `public/images` 配下で管理し、外部 hotlink に依存しない。

## Frontend 方針

- 1ページで完結するシンプルな SPA として作る。
- Hero はブランド名と価値提案が first viewport で伝わるようにする。
- 3カードは MUI Grid で `xs/sm: 12`, `md: 6`, `lg: 4` 相当に並べる。
- モバイルで文字がはみ出さないよう、固定幅や過度な大文字装飾を避ける。
- Tailwind は余白、レイアウト、補助的な装飾に使い、MUI はカード、ボタン、アイコン、テーマに使う。
- UI は落ち着いた業務・信頼系のトーンにし、過度な装飾や派手なグラデーションに寄せない。

## 検証

変更後は原則として以下を実行する。

```bash
npm run lint
npm run build
```

ブラウザ実描画確認、Playwright、screenshot、in-app browser を使う場合は、上位 AGENTS の画面確認ルールに従い、必要なら事前にユーザー確認を取る。

## 禁止事項

- 明示依頼なしの production 操作、deploy、DNS、SSL、環境変数変更。
- Anshin 本体 repo や `anshin-vulnediag-infra` の差分を、`anshin.care` 作業のついでに変更すること。
- secret、`.env` 実体、DB dump、OAuth secret、API key の commit。
- 無関係な整形、依存更新、広範囲リファクタ。
- 既存差分の巻き戻し。


## ローカル DB migration 必須ルール

- backend / DB schema / Alembic migration を追加・変更した作業では、最終報告前に必ずローカル DB へ migration を適用する。migration があるのに未適用のまま「完了」と報告してはいけない。
- DB / migration コマンドは repo-local の guard / wrapper を必ず使う。Anshin backend では `bash scripts/ai_run_db_command.sh -- docker compose exec backend alembic upgrade head` を基本とし、host から `postgres` / `db` など Docker Compose service 名へ直接接続する Alembic 実行は禁止する。
- migration が失敗した場合は、その場で原因を切り分け、ローカル DB が head まで到達したことを確認してから報告する。やむを得ず適用できない場合は、未適用であること、失敗箇所、次に直す対象を明記する。
