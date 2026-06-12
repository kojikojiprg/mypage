# Portfolio

個人ポートフォリオサイト — React + GitHub Pages

---

## フォルダ構成

```
src/
├── App.jsx                     # ルート（タブ切り替えのみ）
├── styles/
│   └── tokens.css              # 色・フォントなどCSS変数
├── hooks/
│   └── useLang.js              # 日英切り替えフック
├── data/                       # ★ コンテンツ更新はここだけ
│   ├── profile.js              # 名前・自己紹介・メール・顔写真
│   ├── sns.js                  # SNSリンク一覧・Twitterユーザー名
│   ├── papers.js               # 論文一覧
│   ├── jobs.js                 # 職歴・学歴
│   ├── skills.js               # スキル
│   ├── services.js             # フリーランス業務内容
│   ├── hobbies.js              # 趣味
│   ├── news.js                 # Newsフィード
│   └── changelog.js            # サイト更新履歴
└── components/
    ├── layout/
    │   └── Header.jsx          # タブバー・サイドバー
    └── tabs/
        ├── HomeTab.jsx
        ├── ResearchTab.jsx
        ├── ExperienceTab.jsx
        ├── FreelanceTab.jsx
        ├── HobbiesTab.jsx
        └── ContactTab.jsx
```

---

## よくある更新作業

| やりたいこと | 編集するファイル |
|---|---|
| 論文を追加 | `src/data/papers.js` の先頭に追加 |
| 職歴を追加 | `src/data/jobs.js` の先頭に追加 |
| SNSリンクを変更 | `src/data/sns.js` の href を更新 |
| 顔写真を追加 | `public/images/avatar.jpg` に配置 → `profile.js` の avatar を更新 |
| カメラ作例を追加 | `public/images/hobbies/` に配置 → `hobbies.js` の photo を更新 |
| 更新履歴を記録 | `src/data/changelog.js` の先頭に追加 |
| Newsを追加 | `src/data/news.js` の先頭に追加 |

---

## セットアップ

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

## デプロイ（GitHub Pages）

```bash
npm install --save-dev gh-pages
# package.json に homepage と deploy スクリプトを追加（DEPLOY.md 参照）
npm run deploy
```
