var users = [
  { name: '太郎' },
  { name: '二郎' },
  { name: '三郎' },
]

var user;
// 一番最初に見つかったものだけが返ってくる
users.find(function (user) {
  return user.name == '二郎';
});

user

// new 演算子は、コンストラクタ関数を持ったユーザ定義のオブジェクト型または内蔵オブジェクト型のインスタンスを生成します。
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('プリウス'),
  new Car('ノート'),
  new Car('アクア')
];

cars

cars.find(function (car) {
  return car.model === 'アクア';
});


var posts = [
  { id: 1, title: '古い投稿' },
  { id: 2, title: '新しい投稿' }
];

var comment = { postId: 2, content: 'いいね！' }

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  })
}

postForComment(posts, comment);

// kadai
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;

admin = users.find(function (user) {
  return user.admin == true
})

// kadai
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

account = accounts.find(function (account) {
  return account.balance == 12
})