function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function (title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'ハリーポッター', price: 1000 },
  { title: 'JavaScript入門', price: 1500 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();

bookShop.priceForTitle('ハリーポッター');

// ES6
// オブジェクトのkeyとvalueが同じ値の場合省略可能
// オブジェクトのvalueがfunctionだった場合省略可能
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}



// 省略できたプロパティは上の方にする
function saveFile() {
  $.ajax({
    url,
    data,
    method: 'POST'
  });
}

const url = 'http://fileload.com';
const data = { color: 'red' };

saveFile(url, data);


// kadai
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

// kadai
const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };

