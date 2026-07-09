# anshin.care

Anshin のサービス群を、短く、わかりやすく紹介するためのシンプルな SPA サイトです。

この repository は、Anshin 本体の訪問サービス経営支援、Anshin 脆弱性診断、新サービス市場調査メモにある介護ロボット・介護テクノロジー構想を、1つの入口ページとして整理します。

## 目的

Anshin が提供する価値を、次の3つのカードで紹介します。

1. アンシンアプリ - 訪問サービス経営支援
   - 勤怠、予定実績、請求、記録、共有、分析をつなぎ、訪問系サービスの現場運用を経営判断に変える。
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
  - アンシンアプリ、訪問サービス経営支援、既存サービス基盤。
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
public/images/
  anshin-care-hero.png
```

## 初期リリースの完成条件

- Hero で Anshin の統合サービス構想が伝わる。
- 3つのサービスカードが `xs/sm: 12`, `md: 6`, `lg: 4` 相当で自然に並ぶ。
- スマホでも文字がはみ出さない。
- MUI、Tailwind CSS、Material Icons をすべて利用している。
- README と AGENTS.md が `anshin.care` の責務に合っている。
