
<!DOCTYPE html>
<html lang="ja">
<head>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <style type="text/css">
  <!--
  body {
    margin: 0;
    padding: 0;
    background-color: #888;
    width: 100%;
    /*overflow: hidden;*/
  }
  #container{
    background-color: #888;
    margin: 0;
    text-align: center;
  }
  #container ul{
    margin: 0 auto;
  }
  #container li{
    margin: 0 auto;
  }
  #q1{
    border: 1px solid #000;
    width: 30%;
  }
  #q1 input{
    background-color: #888;
    border: none;
  }
  #q2{
    border: 1px solid #000;
    width: 30%;
  }
  #q2 input{
    background-color: #888;
    border: none;
  }


  -->
  </style>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>

  <script type="text/javascript">
    $(function(){

      //---------------         Q2へスクロールstart           -----------------------

      //enterkey をおされたときの処理
      $( '#name' ).keypress( function ( e ) {
        if ( e.which == 13 ) {
          //Q2へスクロール
          $("html,body").animate({ scrollTop: $('#q2_container').offset().top }, 'slow');
          return false;
        }
      } );
      //Q2へスクロール
      $("q1_next_button").click(function(){
        $("html,body").animate({ scrollTop: $('#q2_container').offset().top }, 'slow');
      });
      //---------------         Q2へスクロールend           -----------------------
    });

  </script>

</head>
<body>

  <div id="container">
    <ul id="question">
      <li id="q1">
        <p>Q1:名前は？</p>
        <input type="text" name="name" id="name"><br />
        <button id="q1_next_button">次へ</button>
      </li>


      <li id="q2">
        <p>Q2:性別は？</p>
        <input type="text" name="sex" id="sex"><br />
        <button id="q1_next_button">次へ</button>
      </li>

    </ul>
  </div>

</body>
</html>
