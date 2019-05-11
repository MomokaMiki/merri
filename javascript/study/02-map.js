// すでにあるデータを変えることはやらない方がいい

var numbers = [1,2,3];
var doubledNumbers = [];

for( var i = 0; i < numbers.length; i++ ){
	doubledNumbers.push( numbers[i] * 2 );
  // numbers[i] = numbers[i]*2
}

// map
// コールバック関数を一回ずつ 
// foreachとの違いはreturnで新しい配列に返してくれる
// pushしなくてもいい
var doubles = numbers.map(function(number){
	return number * 2;
});

doubles

doubledNumbers;

var cars = [
  { type: '軽自動車', price: '安い' },
  { type: '高級車', price: '高い' }
];

// map
// 新しく値段だけの配列を作る
var prices = cars.map(function (car) {
  return car.price;
});
prices;

//  mapはその画面ようの配列として作って使うことができる



var paints = [{ color: '赤', aho: 'aa' }, { color: '青', aho: 'aa' }, { color: '黄', aho: 'aa' }];

// .property => 全部からpropertyの値とってくる　 [property] => 
function pluck(array, property) {
  return array.map(function (arr) {
    return arr[property]
  });
}

pluck(paints, 'color');

