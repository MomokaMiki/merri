var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 16 }
]

// 全てが16以上かどうか
computers.every(function (computer) {
  return computer.ram >= 16;
})

computers.some(function (computer) {
  return computer.ram >= 16;
})

// every => && 論理積
// some => || 論理和


function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
}

// new演算子　オブジェクト生成
// new〇〇で要素を追加　function
var username = new Field('my_username');
var password = new Field('my_password');
var birthday = new Field('2010/10/10');

var fields = [username, password, birthday]

var formIsValid = fields.every(function (field) {
  return field.validate();
});

if (formIsValid) {
  // サーバーにリクエスト投げる
  formIsValid
}
else {
  // エラーを表示
  formIsValid
}

// kadai
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;

hasSubmitted = users.every(function (user) {
  return user.hasSubmitted == true
})



// kadai
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;

inProgress = requests.some(function (request) {
  return request.status == 'pending'
});