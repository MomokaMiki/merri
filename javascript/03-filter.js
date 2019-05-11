var products = [
  { name: 'きゅうり', type: '野菜' },
  { name: 'バナナ', type: 'フルーツ' },
  { name: 'セロリ', type: '野菜' },
  { name: 'オレンジ', type: 'フルーツ' }
];

// for文
var filteredProducts = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'フルーツ') {
    filteredProducts.push(products[i]);
  }
}
// filteredProducts

// filterを使った場合
// コールバック関数で、true or falseをfilterで判断

products.filter(function (product) {
  return product.type === 'フルーツ';
  // filterの中ではif文で分岐させることはいらない。
  // if ( product.type === 'フルーツ' ){
  //	return true;
  // } 
});
  

var products = [
  { name: 'きゅうり', type: '野菜', quantity: 0, price: 1 },
  { name: 'バナナ', type: 'フルーツ', quantity: 10, price: 15 },
  { name: 'セロリ', type: '野菜', quantity: 30, price: 9 },
  { name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5 }
];

// 種類が野菜で、量が0個より多くて、値段が10より小さい
products.filter(function (product) {
  return product.type === '野菜'
    && product.quantity > 0
    && product.price < 10;
})

var post = { id: 4, title: '初めての投稿' };
var comments = [
  { postId: 4, content: 'コメント１' },
  { postId: 3, content: 'コメント２' },
  { postId: 4, content: 'コメント３' }
];

// 関数を作成
function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments)


// kadai
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers = numbers.filter(function (number) {
  return number > 50;
});

// kadai
var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

var filteredUsers;

filteredUsers = users.filter(function (user) {
  return user.admin === true;
})


// 応用
function reject(array, iteratorFunction) {
  return array.filter(element => !iteratorFunction(element));
}