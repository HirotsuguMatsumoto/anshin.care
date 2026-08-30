---
schema_version: 2
doc_id: inventory.anshin-care-site.documents-index
title: "anshin.care site documents"
domain: "general"
document_kind: index
scope: product
product: "anshin.care"
owner: "anshin.care"
authority: reference
status: inventory
risk_level: normal
source_doc_ids: []
consumers: []
code_paths: []
contract_paths: []
test_paths: []
last_reviewed: null
review_interval_days: 90
sensitivity: internal
---

# anshin.care site documents

このdirectoryは、Anshinサービス紹介siteに閉じるarchitecture、表現方針、SEO及び運用手順を管理する。

文書管理はcanonical ID `anshin.governance.document-management` のAnshin全体標準に従う。

## 責務境界

- Anshin全体のgovernance・共通policy: `anshin/documents`
- 各productの機能仕様: 各product repositoryのcanonical文書
- site固有の構成・表現・運用仕様: このdirectory
- 実装入口: repository直下の`README.md`及び`src/app`

各product仕様をこのdirectoryへ複製せず、紹介site固有の判断だけを管理する。
