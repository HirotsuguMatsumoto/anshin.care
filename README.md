# anshin.care

## 専門用語一覧

| 用語 | 正式名称・読み方 | 意味・本書での扱い |
| --- | --- | --- |
| SPA | Single-Page Application | 画面全体を再読込みせずclient側で表示を切り替えるWeb application |
| repository | Repository | source code、文書及び変更履歴を一まとまりで管理する単位 |
| 訪問介護 | ほうもんかいご | 介護職員が利用者の居宅を訪問し、身体介護や生活援助を行う介護保険service |
| 障害福祉 | しょうがいふくし | 障害のある人の地域生活・社会参加を支えるserviceと制度の総称 |
| PoC | Proof of Concept | 限定した範囲で実現可能性、効果及びリスクを検証する取組 |
| API | Application Programming Interface | システムやソフトウェア間で機能・データを利用するための接続仕様 |
| 介護保険 | かいごほけん | 要介護・要支援者へ必要な介護serviceを給付する公的保険制度 |
| MD | Markdown | 見出し、表、link等をplain textで記述する文書形式 |
| JavaScript | JavaScript | Webブラウザ及びserver等で実行されるプログラミング言語 |
| LTS | Long-Term Support | 長期間の保守・security updateが提供されるrelease区分 |
| Next.js | Next.js | Reactを基盤とするWebアプリケーションフレームワーク |
| React | React | componentベースでWeb UIを構築するJavaScript library |
| TypeScript | TypeScript | JavaScriptに静的な型機能等を追加したプログラミング言語 |
| MUI | Material UI | React向けのUI component library |
| CSS | Cascading Style Sheets | Webページの見た目や配置を定義するスタイル言語 |
| HTTP | Hypertext Transfer Protocol | Web上でrequestとresponseを交換する通信規約 |
| HTTPS | Hypertext Transfer Protocol Secure | TLSで暗号化したHTTP通信 |
| URL | Uniform Resource Locator | Web上のresourceの所在と取得方法を示す文字列 |

Anshin のサービス群を、短く、わかりやすく紹介するためのシンプルな SPA サイトです。

この repository は、Anshin 本体の小規模事業者向け業務基盤、Anshin 脆弱性診断、新サービス市場調査メモにある介護ロボット・介護テクノロジー構想を、1つの入口ページとして整理します。

## 目的

Anshin が提供する価値を、次の3つのカードで紹介します。

1. アンシンアプリ - 小規模事業者向け業務基盤
   - 勤怠管理、給与計算、事業所サービス管理、集計・分析から始め、必要に応じて訪問サービス向け業務管理や訪問介護・障害福祉向け業務管理へ広げる。
2. 介護ロボット・介護テクノロジー
   - 訪問職員の負担軽減、在宅見守り、服薬・予定支援、家族報告を、現場起点の PoC とアプリ連携で形にする。
3. アンシン脆弱性診断
   - アプリ、API、管理画面、外部連携、ロボット・センサー連携を継続的に診断し、要配慮情報を扱うサービスの信頼性を支える。

## コンテンツ方針

- キャッチアイと短いサービス概要に絞る。
- 詳細な機能説明、料金、問い合わせフォーム、記事ページはまだ作らない。
- 1ページ内で、Anshin の全体像が伝わることを優先する。
- 医療行為、法務判断、介護保険適用可否を断定する表現は避ける。
- 脆弱性診断は、不安を煽る表現ではなく「信頼性を継続的に確認する基盤」として扱う。

## 参照元

- `/Users/matsumotoyuuji/dev/anshin`
  - アンシンアプリ、小規模事業者向け業務基盤、既存サービス基盤。
- `/Users/matsumotoyuuji/dev/anshin-vulnediag-infra`
  - アンシン脆弱性診断サービス。
- `/Users/matsumotoyuuji/dev/documents/anshin_new_service_market_research_2026-07-07.md`
  - 「2. 介護ロボット、介護テクノロジーを活用した訪問職員支援サービス、および利用者の生活支援サービス」

## 技術スタック

- Node.js: v24 LTS 系
  - 2026-07-09 時点の公式 Latest LTS は v24.18.0。
  - local では v24 系で動かす想定。
- Next.js
- React
- TypeScript
- MUI
- Tailwind CSS
- Material Icons

## 開発

```bash
npm install
npm run dev
```

標準では `http://localhost:3000` で起動します。
`npm run dev` は in-app browser での不意な reload 感を抑えるため、webpack dev server と server Fast Refresh 無効化で起動します。

表示確認だけを安定させたい場合は、production build で起動します。

```bash
npm run preview
```

## 診断用ドメイン所有確認

Anshin 脆弱性診断から `https://www.anshin.care` を確認できるよう、次の URL で検証用テキストを返します。

```text
https://www.anshin.care/.well-known/anshin-vulnediag-verification.txt
```

ローカルでは `.env` に次の環境変数を設定します。値は repository に直接コミットしません。

```bash
VULNE_VERIFICATION_TEXT_PATH=/.well-known/anshin-vulnediag-verification.txt
VULNE_VERIFICATION_TEXT_VALUE=...
```

Vercel 公開環境では、Project Settings の Environment Variables に同じ2つの環境変数を追加し、Production へ反映したうえで redeploy します。

## 検証

```bash
npm run lint
npm run build
```

## ディレクトリ

```text
src/app/
  layout.tsx       # app shell / metadata
  page.tsx         # single page UI
  providers.tsx    # MUI theme provider
  globals.css      # Tailwind + global styles
  .well-known/
    anshin-vulnediag-verification.txt/
      route.ts     # vulne domain verification response
public/images/
  anshin-care-hero.png
```

## 初期リリースの完成条件

- Hero で Anshin の統合サービス構想が伝わる。
- 3つのサービスカードが `xs/sm: 12`, `md: 6`, `lg: 4` 相当で自然に並ぶ。
- スマホでも文字がはみ出さない。
- MUI、Tailwind CSS、Material Icons をすべて利用している。
- README と AGENTS.md が `anshin.care` の責務に合っている。
