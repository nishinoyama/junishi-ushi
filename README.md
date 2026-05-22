# junishi-ushi

nishinoyama のポートフォリオサイトです。React、TypeScript、Vite で実装し、Firebase Hosting へデプロイする構成になっています。

## Overview

トップページではプロフィール画像、サイトタイトル、簡単な説明、SNS リンクを表示します。サンプル UI として、クリックするたびに Collatz 関数で値が変わるカウンターも置いています。

## Tech Stack

- React 19
- TypeScript
- Vite
- Firebase Hosting
- ESLint

## Directory Structure

```text
.
├── public/              # 静的アセット
├── src/
│   ├── assets/          # アプリ内で import する画像
│   ├── App.tsx          # メイン画面
│   ├── App.css          # 画面固有のスタイル
│   ├── index.css        # グローバルスタイル
│   └── main.tsx         # React のエントリポイント
├── firebase.json        # Firebase Hosting 設定
├── package.json         # scripts と依存関係
└── vite.config.ts       # Vite 設定
```

## Getting Started

依存関係をインストールします。

```bash
pnpm install
```

開発サーバーを起動します。

```bash
pnpm dev
```

ビルドします。

```bash
pnpm build
```

ビルド結果をローカルで確認します。

```bash
pnpm preview
```

Lint を実行します。

```bash
pnpm lint
```

## Deployment

Firebase Hosting の公開ディレクトリは `dist` です。`pnpm build` で生成したファイルが配信対象になります。

```bash
pnpm build
firebase deploy
```

GitHub Actions には Firebase Hosting 用の workflow があり、Pull Request と merge を契機にホスティングへのデプロイを行う設定です。

## Notes

- Firebase の default project は `.firebaserc` で `nishinoyama-net` に設定されています。
- アプリ本体は現状ほぼ `src/App.tsx` にまとまっています。
- `.agents/skills` は開発補助用のスキル定義で、Web アプリの実行には直接関係しません。
