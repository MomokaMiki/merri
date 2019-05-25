var expense = {
  type: '交際費',
  amount: '4500 JPY'
};

var type = expense.type;
var amount = expense.amount;

// ES6 
// オブジェクトの中に入っているプロパティを出してくる
const { type } = expense;
const { amount } = expense;

// 一緒に複数いられる
// expenseの中で使っている名前をそのままつかわないといけない
const { type, amount } = expense;
type;
amount;

// 名前を変える場合は・・・
const { type: myType, amount } = expense;
myType;
amount;

// ないものを呼び出しても、エラーにならないので軽く使ってOK


// 
var savedFile = {
  extension: 'jpg',
  name: 'profile',
  size: 14040
}

function fileSummary({ file }) {
  return `
    ${file.name}.${file.extension}の容量は${file.size}です。
  `;
}
fileSummary(savedFile);


// 分割代入を、引数で使う
function fileSummary({ name,extension,size }) {
  return `
    ${name}.${extension}の容量は${size}です。
  `;
}
fileSummary(savedFile);

// 第二引数
function fileSummary({ name, extension, size },{username}) {
  return `
    ${username}:${name}.${extension}の容量は${size}です。
  `;
}
fileSummary(savedFile,{ username: 'Ken' });

// オブジェクト => {}でプロパティ
// 配列 => []で
const companies = [
  'Google',
  'facebook',
  'Uber'
];  

const [ name,name2,name3 ] = companies;
name;
name2;
name3;

// ES6
const [ name ] = companies;
// ES5
const firstCompany = companies[0];

const { length } = companies;

// 残りを違うところにいれておく => rest
const [name, ...rest] = companies;
name;
rest;



const companies = [
  { name: 'Google', location: 'マウンテンビュー'  },
  { name: 'Facebook', location: 'メンロパーク' },
  { name: 'Uber', location: 'サンフランシスコ' }
];

// ES5
const location = companies[0].location;
location;

// ES6
const [ {location} ] = companies;
location;


const Google = {
  locations: ['マウンテンビュー','ニューヨーク']
};

const [first] = locations;
const{ locations: [ first ] } = Google;
first;


