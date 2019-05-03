new Vue ({
  el: '#app',
  data:{
    budget: 600,
    limit: 20,
    keyword: '',
    cartIn: [],
    order: false,
    list:[
      { labelId: 'vege01', name: '大阪府のキャベツ' , price:200 ,src:'img/vege01.png' },
      { labelId: 'vege02', name: '京都府の玉ねぎ', price: 150, src: 'img/vege02.png' },
      { labelId: 'vege03', name: '兵庫県のとうもろこし', price: 400, src: 'img/vege03.png' },
      { labelId: 'vege04', name: '和歌山県のトマト', price: 500, src: 'img/vege04.png' },
      { labelId: 'vege05', name: '大阪府のなすび', price: 300, src: 'img/vege05.png' },
      { labelId: 'vege06', name: '京都府のにんじん', price: 450, src: 'img/vege06.png' },
      { labelId: 'vege07', name: '兵庫県のブロッコリー', price: 220, src: 'img/vege07.png' },
      { labelId: 'vege08', name: '和歌山県のほうれん草', price: 420, src: 'img/vege08.png' },
      { labelId: 'vege09', name: '大阪府のレタス', price: 120, src: 'img/vege09.png' },
      { labelId: 'vege10', name: '京都府のれんこん', price: 360, src: 'img/vege10.png' },
      { labelId: 'vege11', name: '兵庫県のキャベツ', price: 340, src: 'img/vege01.png' },
      { labelId: 'vege12', name: '和歌山県の玉ねぎ', price: 200, src: 'img/vege02.png' },
      { labelId: 'vege13', name: '大阪府のとうもろこし', price: 530, src: 'img/vege03.png' },
      { labelId: 'vege14', name: '京都府のトマト', price: 470, src: 'img/vege04.png' },
      { labelId: 'vege15', name: '兵庫県のなすび', price: 420, src: 'img/vege05.png' },
      { labelId: 'vege16', name: '和歌山県のにんじん', price: 500, src: 'img/vege06.png' },
      { labelId: 'vege17', name: '大阪府のブロッコリー', price: 380, src: 'img/vege07.png' },
      { labelId: 'vege18', name: '京都府のほうれん草', price: 500, src: 'img/vege08.png' },
      { labelId: 'vege19', name: '兵庫県のレタス', price: 300, src: 'img/vege09.png' },
      { labelId: 'vege20', name: '和歌山県のれんこん', price: 200, src: 'img/vege10.png' }
    ]
  },
  computed: {

    // name => price => soted => limited

    // returnで結果を返してくる => resultへ
    result: function(){

      // resultsに結果を入れていく
      var refineName = [];
      var results = [];

      for (var i in this.list) {
        var data = this.list[i];
        // keywordが配列listのnameを含む場合、refineNameに追加
        if (data.name.indexOf(this.keyword) !== -1) {
          refineName.push(data);
        }
      }

      for (var i = 0; i < refineName.length; i++) {
        var data = refineName[i];
        // 配列refineAreaの中で設定された金額以下のものを配列resultsに追加
        if (refineName[i].price <= this.budget) {
          results.push(data);
        }
      }
      console.log(refineName)
      return results;
    },
    sorted: function () {

      var sortList = this.result;
      console.log(this.result)

      if( this.order ){
        sortList.sort(function(a,b){
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });
      }
      else{
      
        sortList.sort(function (a, b) {
          if (a.labelId < b.labelId) return -1;
          if (a.labelId > b.labelId) return 1;
          return 0;
        });
      }
      return sortList;
    },

    limited: function(){
      
      // 件数制限をつけてreturn
      return this.sorted.slice(0, this.limit)
    },

    total: function(){
      
      var money = 0;
      // 合計金額の計算
      for (var i in this.cartIn ){
        var data = this.cartIn[i];
        money = money + data.price;
      }
      return money
    },
  }
})
