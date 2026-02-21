// スクリプトプロパティからAPIキーを取得
const props = PropertiesService.getScriptProperties();
const API_KEY = props.getProperty('GEMINI_API_KEY');
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

function doGet() {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('CLI to Tcl/Tk Generator')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function generateTclTk(cmdName, purpose, helpText) {
  if (!API_KEY) {
    throw new Error('スクリプトプロパティ「GEMINI_API_KEY」が設定されていません。');
  }

  const prompt = `
あなたはTcl/Tkの専門エンジニアです。以下の情報を元に、単一ファイルで動作するGUIプログラム(.tcl)を作成してください。

[条件]
- 名前: ${cmdName}
- 目的: ${purpose}
- ヘルプメッセージを解析し、主要なオプションを網羅した使いやすいGUIにすること。
- パス選択には tk_getOpenFile / tk_getSaveFile を使用。
- 実行ボタンでコマンドを構築し、puts で出力してから exec で実行。

[出力形式]
- 解説や挨拶は一切不要。
- コードの最初から最後まで、純粋なTcl/Tkコードのみを返してください。
- Markdownのバッククォート（\`\`\`tcl ... \`\`\`）も含めないでください。

[解析対象のヘルプ]
${helpText}
  `;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true // エラー詳細を確認しやすくするため
  };

  const response = UrlFetchApp.fetch(`${API_URL}?key=${API_KEY}`, options);
  const json = JSON.parse(response.getContentText());
  
  if (json.error) {
    throw new Error('APIエラー: ' + json.error.message);
  }
  
  return json.candidates[0].content.parts[0].text;
}