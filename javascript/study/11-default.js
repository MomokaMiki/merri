function makeAjaxRequest(url,method ){
  // ES5
  if( !method){
    method = 'GET';
  }

  // ajaxリクエスト
}

makeAjaxRequest('google.com');
// => methodを指定指定ない場合は、GETをデフォルト値として与える



// ES6
function makeAjaxRequest(url, method = 'GET') {
  

  // ajaxリクエスト
}

makeAjaxRequest('google.com',null);
// => nullを指定すると、空っぽになってくれる
// undefinedにすると、デフォルト値になってしまう



// ユーザーを作成する
function User(id){
  this.id = id;
}

new User(1);

function generateId(){
  return Math.random()*999999;
}


function createAdminUser(user){
  user.admin = true;
  return user;
}
createAdminUser(new User(generateId()));

//ーーーー

// デフォルト値にロジックも入れられる。
function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}
createAdminUser(new User(generateId()));

const user = new User(10);
createAdminUser(user);


// 課題
function addOffset(style) {
  if (!style) {
    style = {};
  }

  style.offset = '10px';

  return style;
}

// リファクタ

function addOffset(style = {}) {
  style.offset = '10px';

  return style;
}