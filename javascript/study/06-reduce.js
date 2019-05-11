var numbers = [10,20,30];
var sum = 0;

// 初期値とnumberの値を渡す
// 初期値が渡されてコールバック関数の結果がsumに入って、またそれがコールバック関数に渡される
// 集約していく
numbers.reduce(function(sum,number){
  return sum + number;
},0);



var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
]

// 空の配列を渡す
// returnしたのが次のコールバック関数に渡されていく
primaryColors.reduce(function (prev, primaryColor) {
  prev.push(primaryColor.color)
  return prev;
}, []);




function balancedParens(string) {
  return !string.split('').reduce(function (prev, char) {
    if (prev < 0) { return prev }
    if (char === '(') { return prev + 1 }
    if (char === ')') { return prev - 1 }
  }, 0)
}

balancedParens(')(');



// kadai
var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function (prev, trip) {
  return prev + trip.distance
}, 0)


// kadai
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function (prev, desk) {
  if (desk.type == 'sitting') {
    return {
      sitting: prev.sitting + 1,
      standing: prev.standing
    }
  }
  if (desk.type == 'standing') {
    return {
      sitting: prev.sitting,
      standing: prev.standing + 1
    }
  }
}, { sitting: 0, standing: 0 });

deskTypes