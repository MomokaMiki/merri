// console.log("notes.js稼働");

const fs = require("fs");

// ノートの全情報を取得する関数
// 関数を実行するときは最後にreturnで処理を締める
let fetchNotes = () => {
  try {
    // ファイル読み込み
    let notesString = fs.readFileSync("notes-data.json");
    // ファイルの中身を解析
    return notes = JSON.parse(notesString);
  }
  catch (e) {
    return [];
  }
};

// ノートを保存する関数
let saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

// ログ表示　関数　exportsに追記するのを忘れない
let logNotes = note => {
  console.log("--------------------");
  console.log(`タイトル：${note.title}`);
  console.log(`内容${note.body}`);
  console.log("--------------------");
}




// 関数
let addNote = (title,body) => {
  // console.log("メモ追加",title,body)
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  // 同じタイトルがあるか arrow関数
  let duplicatedNotes = notes.filter( note => note.title === title );
  // 同じタイトルが無い時だけ
  if (duplicatedNotes.length === 0){
    // 配列にプッシュして追加、配列情報をテキストファイルに追加
    notes.push(note);
    // (ファイル名,JSONを文字列に変換)
    // writeFileSyncはファイルがあるのを前提にしているため、無いとエラーが出る
    // fs.writeFileSync("notes-data.json", JSON.stringify(notes));
    saveNotes(notes);

    // 保存するたびにコンソールで表示させる為に、返り値設定　addするたびに表示
    return note;
  }
};

let showAll = () => {
  // console.log("メモ一覧")
  return fetchNotes();
}

let readNote = title => {
  // console.log("個別メモ表示",title)
  let notes = fetchNotes();

  // 同じタイトルがあるか arrow関数
  let filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];  
}

let removeNote = title => {
  // console.log("メモ削除", title)

  // 既存のデータを取得
  let notes = fetchNotes();

  // 引数を元に検索し、見つかったら削除
  // 削除したいもの以外を探して、それを残す
  let filteredNotes = notes.filter( note => note.title !== title );

  // 削除後のデータを保存
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}


// オブジェクト代入するやり方
// ファイルを呼び出す
module.exports = {
  addNote,
  showAll,
  readNote,
  removeNote,
  logNotes
};