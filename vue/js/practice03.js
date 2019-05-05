new Vue ({
      el: '#monster',
      data:{
        list:[
          { id: 1, name: 'ぱーぷる', hp: 100, src: 'img/monster01.png', weak: 'magic' },
          { id: 2, name: 'ぼす', hp: 500, src: 'img/monster02.png', weak: 'sword' },
          { id: 3, name: 'まるまる', hp: 200, src: 'img/monster03.png', weak: 'magic' }
        ],
        val: ''
      },
      methods:{
        clickAttack: function(key){
          // 体力が0より高かったら
          if( this.list[key].hp > 0 ){
            // 剣が選択されていて、
            if (this.val == 'sword') {
              // 弱点が剣だったら
              if (this.list[key].weak == 'sword') {
                this.list[key].hp -= 100
              }  
              else {
                this.list[key].hp -= 10
              }
            }
            // 魔法が選択されていて
            else {
              // 弱点が魔法だったら
              if (this.list[key].weak == 'magic') {
                this.list[key].hp -= 100
              }
              else {
                this.list[key].hp -= 10
              }
            }
            // マイナスが出ないように
            if (this.list[key].hp < 0) {
              this.list[key].hp = 0;
            }

            // 全モンスターが0になったらクリア表示
            // eachが上手く回らなかった
            var listflg = true;
            if (this.list[0].hp > 0) {
              listflg = false;
            }
            if (this.list[1].hp > 0) {
              listflg = false;
            }
            if (this.list[2].hp > 0) {
              listflg = false;
            }
            if(listflg){
              $(".clear").css("display","block");
            } 
          }
        }
      }
    })




