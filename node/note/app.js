// console.log("app.js稼働開始");

const fs = require("fs");
const notes = require("./notes.js");
const yargs = require("yargs");
const argv = yargs.argv;

// console.log(process.argv);
// nodeのありか・ファイルの場所・引数

// let command = process.argv[2];
let command = argv._[0];
// console.log("コマンド：" + command);

// $ node app.js read --title="秘密" titleプロパティ　="value"
// console.log("process",process.argv);
// process[
//   '/usr/local/bin/node',
//   '/Users/s2170069/Desktop/node/note/app.js',
//   'read',
//   '--title=秘密'
// ]
// console.log("yargs",argv);
// yargs { _: ['read'], title: '秘密', '$0': 'app.js' }

if(command === "add"){
  // console.log("メモを追加します。");
  // 関数を呼び出す・引数指定
  let note = notes.addNote(argv.title,argv.body);
  // ノートが新しく保存されたかコンソールで表示させる
  if(note){
    console.log("保存されました。");
    // notesファイルのlogNotes関数を使用
    notes.logNotes(note);    
  }
  else{
    console.log("--------------------");
    console.log("タイトルが重複しています。");
    console.log("--------------------");
  }
}
else if (command == "list"){
  // console.log("メモを一覧表示します。")
  let allNotes = notes.showAll();
  console.log(`表示数：${allNotes.length}`);
  allNotes.forEach( note => notes.logNotes(note) );
}
else if (command === "read"){
  // console.log("メモを個別表示します。")
  let note = notes.readNote(argv.title);
  if( note ){
    console.log("見つかりました。");
    notes.logNotes(note);
  }
  else {
    console.log("--------------------");
    console.log("見つかりませんでした。");
    console.log("--------------------");
  }
}
else if (command === "remove") {
  // console.log("メモを削除します。")
  // notes.removeNote(argv.title);
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? "削除されました" : "削除されませんでした";
  console.log(message);
}