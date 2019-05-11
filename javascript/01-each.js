
// これまでのforループ
var colors = ['red', 'green', 'blue'];

for (var i = 0; i < colors.length; i++) {
  colors[i];
}

// foreach
// 名前のない匿名関数を実行させる。一個ずつ実行される。
colors.forEach(function (color) {
  console.log(color);
})

//////////

// 数字の配列を用意する
var numbers = [1, 2, 3, 4, 5];

// 合計を保持する変数を用意する
var sum = 0;

// 関数を先に定義してもOK
//function adder( number ){
//	sum += number;
//}

// 配列の一つ一つの数字を合計に足す
numbers.forEach(function (number) {
  sum += number;
});
// numbers.forEach( adder );
// (adder())と書いてしまうとsumによくわからないものを足してしまう

// 合計を表示する
sum;

// foreachの方がいい時
// それぞれにすぐ削除をしたいという実行ができる
emails.forEach(function (email) {
  deleteEmail(email);
});



// 課題
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function (image) {
  var result = image.height * image.width;
  areas.push(result);

})

areas