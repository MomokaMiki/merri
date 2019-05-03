console.log("notes.js稼働")

// moduleオブジェクト
// console.log(module);

// exports 他のファイルから呼び出せるようになる
module.exports.age = 25;

module.exports.addNote = function(){
  console.log("addNote");
  return "new note";
};

