function addNumbers(numbers){
  return numbers.reduce((sum,number) => {
    return sum + number;
  },0)
}
addNumbers([1,2,3,4,5]);


// addNumbers(1, 2, 3, 4, 5);の形にするには・・・
// ６を足しても意図した結果にはならない
function addNumbers(a,b,c,d,e) {
  const numbers = [a,b,c,d,e];
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}
addNumbers(1, 2, 3, 4, 5);


// rest演算子
// 配列に変換して入れる
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}
addNumbers(1, 2, 3, 4, 5);

// 配列で渡したら良いやん！　=> 


// ES5で、配列どうしを合体
const defaultColors = ['赤','緑'];
const userFavoriteColors = ['オレンジ','黄'];

// ES5
defaultColors.concat(userFavoriteColors);

// ES6　中身を展開して合体させる
// 展開しなかったら、配列の中に配列が入ってしまう
[ ...defaultColors, ...userFavoriteColors ];


// 増やすと・・・
const defaultColors = ['赤', '緑'];
const userFavoriteColors = ['オレンジ', '黄'];
const fallColors = ['茶','紅葉'];

['青', ...fallColors, ...defaultColors, ...userFavoriteColors];

// 配列なので、どこかに追加してもちゃんと配列の中に入ってくれる



function validateShoppingList( ...items ){
  // 牛乳がなかった場合
  if(items.indexOf('牛乳') < 0){
    return [ '牛乳', ...items ];
  }

  return items;
}

// 可変長で渡してあげる
validateShoppingList('オレンジ','パン')



const MathLibrary = {
  calculateProduct(a,b){
    return a * b;
  }
};

// calculateProduct => multiply に変えたい！
// それもかけばいいじゃん！
const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  },
  multiply(a, b) {
    return a * b;
  }
};

MathLibrary.calculateProduct(2,3);
MathLibrary.multiply(2, 3);

// 演算子を使う
const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

// 課題1
function join(array1, array2) {
  return array1.concat(array2);
}

// リファクタ後
function join(array1, array2) {
  return [...array1, ...array2];
}

// 課題2
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

// リファクタ後

// 正解してないがしくみは理解 ↓↓

var array = [1, 2];

function unshift(array, ...rest) {
  return [...array, ...rest]
}

unshift(array, 1, 2, 3, 4, 5)