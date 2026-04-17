# エージェント作業ガイド（node-compression-benchmark）

このドキュメントは、本リポジトリで作業するエージェント向けの実行ガイドです。  
目的は **圧縮ベンチマークの再現性を保ちつつ、安全に差分を作ること** です。

---

## 1. このリポジトリで行うこと

- 入力ファイル群に対して圧縮ベンチマークを実行する。
- ベンチマーク結果を `charts/` 配下の SVG として更新する。
- 変更内容をレビューしやすい形でコミットする。

主な実行スクリプト:

- `scripts/benchmark.js`

---

## 2. 前提条件

- Node.js / npm が利用可能であること。
- リポジトリルートでコマンドを実行すること。

初回セットアップ:

```bash
npm ci
```

---

## 3. 実行手順（標準フロー）

1. 依存関係をインストールする。
2. ベンチマークを実行する。
3. 差分を確認する。
4. 必要なファイルのみコミットする。

実行コマンド:

```bash
npm run benchmark
```

直接実行する場合:

```bash
node scripts/benchmark.js
```

---

## 4. 生成・更新されるファイル

- `charts/*.svg`

想定どおりに成果物が更新されたか、`git diff` で必ず確認してください。

---

## 5. 変更時のルール

- ベンチマーク結果を更新した場合は、対応する `charts/*.svg` をコミット対象に含める。
- 依存関係を変更した場合は、`package-lock.json` を必ず同時に更新する。
- 意図しない大規模差分（改行コード・フォーマットのみの変更など）を含めない。
- 実装や運用方針と `README.md` の記載が矛盾しないようにする。
- `README.md` のうちベンチマークスクリプトが生成する箇所は、`README.md` を直接編集せず、生成元の `scripts/benchmark.js` を修正して反映する。

---

## 6. 作業前後チェックリスト

### 作業前

- [ ] リポジトリルートにいる
- [ ] 依存関係がインストール済み（`npm ci`）
- [ ] 目的の変更範囲を把握している

### 作業後

- [ ] ベンチマークが実行できる
- [ ] `charts/*.svg` の差分が意図どおり
- [ ] 依存変更時に `package-lock.json` を更新済み
- [ ] コミットに不要ファイルが含まれていない

---

## 7. トラブルシューティング

- `npm ci` で失敗する場合:
  - Node.js / npm のバージョン差異を確認する。
  - `package-lock.json` と `package.json` の不整合を確認する。
- ベンチマーク結果の差分が大きすぎる場合:
  - 実行環境（Node.js バージョン、依存関係、入力ファイル）を見直す。

---

## 8. コミットメッセージ例

- `Update benchmark charts for latest compression run`
- `Regenerate charts after benchmark script update`
- `Update dependencies and refresh benchmark outputs`

