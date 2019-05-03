console.log("app.js 稼働開始");

// require()
// 外部ファイルを呼び出す
// モジュール・パッケージ

// 1,コアモジュール・ビルトインモジュール(nodeインストールした時点で使えるツール)
// 2,オリジナルファイル(自分で作成したもの)
// 3,外部パッケージ(npm経由で取得してインストールしてから使用)

// ファイルシステムのモジュールを呼び出す
// 今後変更することはないのでvar ではなく constで
const fs = require("fs");
const os = require("os");

// オリジナルファイルを呼び出す
//require("./notes.js");
const notes = require("./notes.js");

let result = notes.addNote();
console.log(result);

// // user情報
// let user = os.userInfo();
// console.log(user);

// //新規ファイルを作成
// fs.appendFile("greeting.txt", "Hello " + user.username + "! あなたは" + notes.age + "才です。", function (err) {
//   if (err) {
//     console.log(err);
//   }
// })