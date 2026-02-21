# Help2TkGenerator 🚀

**CLIのヘルプメッセージから、Tcl/Tk製のGUIフロントエンドを自動生成するWebアプリ**

`Help2TkGenerator` は、複雑なCLIコマンドの `--help` テキストを Gemini API (LLM) で解析し、そのコマンドを操作するためのGUI（Tcl/Tkスクリプト）を瞬時に生成するGoogle Apps Script (GAS) アプリケーションです。

---

## 🌟 特徴

* **LLMによる高度な解析**: 構造化されていないヘルプテキストから、オプション、フラグ、引数の型（ファイル、数値、文字列）を自動判別。
* **Tcl/Tkコードを即時出力**: 生成されたコードをコピーして `.tcl` として保存し、`wish` コマンドで実行するだけ。
* **コンテキスト対応**: 「動画を圧縮したい」などの目的を入力することで、UIのレイアウトやデフォルト値を最適化。
* **サーバーレス**: Google Apps Scriptで動作するため、環境構築が不要。

## 🛠️ インストールとセットアップ

### 1. Gemini API キーの取得

1. [Google AI Studio](https://aistudio.google.com/) で API キーを取得します。

### 2. GASプロジェクトの作成

1. [Google Apps Script](https://script.google.com/) で新しいプロジェクトを作成します。
2. `Code.gs` と `index.html` をプロジェクト内に作成し、本リポジトリのソースコードを貼り付けます。

### 3. スクリプトプロパティの設定

1. GASエディタの「プロジェクトの設定」（歯車アイコン）を開きます。
2. 「スクリプトプロパティ」に以下の値を追加します。
* **プロパティ名:** `GEMINI_API_KEY`
* **値:** あなたが取得したAPIキー



### 4. デプロイ

1. 「新しいデプロイ」から「ウェブアプリ」を選択します。
2. アクセスできるユーザーを「自分のみ」または必要に応じて設定し、デプロイします。
3. 発行されたURLにアクセスすれば準備完了です！

## 🚀 使い方

1. Webアプリを開き、**コマンド名**（例: `ffmpeg`）を入力。
2. **利用目的**（例: `MP4をリサイズして保存したい`）を入力。
3. ターミナルで実行した `command --help` の結果をテキストエリアに貼り付け。
4. **「GUIコードを生成」**をクリック。
5. 出力されたコードを `myscript.tcl` として保存し、以下を実行：
```bash
wish myscript.tcl

```



## 📝 ライセンス

[MIT License](https://www.google.com/search?q=LICENSE)

---
Powered by (Gemini)[https://gemini.google.com]
