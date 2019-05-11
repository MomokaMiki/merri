//const add = function(a,b){
//return a + b;
//}

//add(1,2);


const add = (a, b) => {
  return a + b;
}

add(1, 2);


// 評価項目がひとつしかない場合
// 暗黙的なreturnが発生 勝手に戻り値として返る
const add = (a, b) => a + b;

add(1, 2);

// 可読性を重視して、1行か複数行(returnあり)にするかを考える


const double = (number) => 2 * number;

double(8);

// 引数が一個の場合、()も省略可能
const double = number => 2 * number;

double(8);

// 引数がない場合は省略できない
const double = () => 2;

double();


const numbers = [1, 2, 3];

numbers.map(function (number) {
  return number * 2;
});

numbers.map((number) => 2 * number);

numbers.map(number => 2 * number);



const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function () {
    // this === team
    // ここでのthisを、コールバック関数でも使ってくれる
    return this.members.map((member) => {
      return `${member}は${this.teamName}の所属です。`;
    });
  }
};

team.teamSummary();

// コールバック関数の中のthisは、teamではなくなってしまう
// ES5  ↓もしくは、一度thisを変数にいれる

// teamSummary: function() {
//   return this.members.map(function (member) {
//     return `${member}は${this.teamName}の所属です。`;
//   }.bind(this));
// }


// ES6 
// アロー関数はlexicalなthisにする
// アロー関数を書く場所によってthisが変わる
// 構文的なthis