<?php
  $studyMenu = [
    [
      "category" => "Vue.js",
      "url" => "vue",
      "list" =>[
        [
          "title" => "ディレクティブの理解",
          "path" => "practice01.html"
        ],  
        [
          "title" => "データの登録・更新",
          "path" => "practice02.html"
        ],
        [
          "title" => "リストデータの操作&nbsp;(&nbsp;カンタンなゲームを作って試してみた&nbsp;)",
          "path" => "practice03.html"
        ],
        [
          "title" => "データの検索・算出・ソート&nbsp;(&nbsp;カンタンなECサイト的なのを作って試してみた&nbsp;)",
          "path" => "practice04.html"
        ],
        [
          "title" => "コンポーネントの理解",
          "path" => "practice05.html"
        ]
      ]
    ],
    [
      "category" => "JavaScript",
      "url" => "javascript",
      "list" => [
        [
          "title" => "forEach [繰り返し処理]",
          "path" => "practice01.html"
        ],
        [
          "title" => "map [新しく配列を作る]",
          "path" => "practice02.html"
        ],
        [
          "title" => "filter [フィルタリング]",
          "path" => "practice03.html"
        ],
        [
          "title" => "find [一致するものを一件だけ見つける]",
          "path" => "practice04.html"
        ],
        [
          "title" => "every/some [論理積/論理和]",
          "path" => "practice05.html"
        ],
        [
          "title" => "reduce [値を集約する]",
          "path" => "practice06.html"
        ],
        [
          "title" => "ES6とは",
          "path" => "practice07.html"
        ],
        [
          "title" => "ES6 const/let [変数]",
          "path" => "practice08.html"
        ],
        [
          "title" => "ES6 テンプレートリテラル",
          "path" => "practice09.html"
        ],
        [
          "title" => "ES6 アロー関数",
          "path" => "practice10.html"
        ],
        [
          "title" => "ES6 オブジェクトリテラル",
          "path" => "practice11.html"
        ]
      ]
    ],
    [
      "category" => "タスクランナー",
      "url" => "taskrunner",
      "list" => [
        [
          "title" => "タスクランナーについて",
          "path" => "practice01.html"
        ],
        [
          "title" => "gulpの基本・使い方",
          "path" => "practice02.html"
        ],
        [
          "title" => "gulpを使ってタスクランナーを作成する",
          "path" => "practice03.html"
        ]
      ]
    ],
    [
      "category" => "Node.js",
      "url" => "node",
      "list" => [
        [
          "title" => "基本・使い方",
          "path" => "practice01.html"
        ]
      ]
    ],
  ];
?>
</pre>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/style.css">
  <title>自主勉強まとめサイト「merri」 | 自主的に勉強したweb関連の技術をまとめています</title>
</head>
<body>
  <header class="head">
    <p class="head__sub">自主勉強・制作のまとめサイト</p>
    <h1 class="head__title">merri</h1>
  </header>
  <main class="main">
    <p class="main__desc">自主的に勉強した内容や、練習として作ったもの等を自分なりにまとめました。<br><br>新しいことや技術の深い所を勉強していく中で感じたのは、<strong>「学ぶことの楽しさ」</strong>でした!!<br>このサイト名は、英語の<strong>「merriment："楽しさ"」</strong>を元にしています。</p>
    <h2 class="main__title">目次</h2>

    <ul class="main__list">
      <?php foreach( $studyMenu as $v ): ?>
      <li class="study-list">
        <h3 class="study-list__title"><?= $v["category"] ?>&nbsp;(&nbsp;<?= count($v["list"] )?>&nbsp;)</h3>
        <ul class="study-list__index">
          <?php foreach( $v["list"] as $e ): ?>
          <li><a href="<?= $v["url"] ?>/<?= $e["path"] ?>" target="_blank"><?= $e["title"] ?></a></li>
          <?php endforeach; ?>
        </ul>
      </li>
      <?php endforeach; ?>
    </ul>
  </main>
  <footer class="foot">
    &copy;2019&nbsp;merri
  </footer>

  <script type="text/javascript" src="//typesquare.com/3/tsst/script/ja/typesquare.js?5b49521a4774449c972b1df2e90393a3"
    charset="utf-8"></script>
  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/event.js"></script>
</body>
</html>