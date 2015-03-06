(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {

  });

  module.controller('HomeController', function($scope, $data, $location) {

    //$("ons-page").css("backgroundColor","red");
    /*
    setCenter();
    //画面の真ん中を取得する
    function setCenter()
    {
      var windowHeight = $(window).height();
      var centerValue = windowHeight / 2;

      $data.centerValue = setCenter();
    }
    */

    //urlの末尾を初期化
    $location.url("", "");

    //formに遷移
    $scope.go_to_form = function() {
      $scope.ons.navigator.pushPage('form.html');//, {title : selectedItem.title});
    };

  });


  module.controller('FormController', function($scope, $data, $location, $anchorScroll) {

    //enterkey をおされたときの処理
    /*$('').keypress( function ( e ) {
      if ( e.which == 13 ) {
        $scope.postText();
      }
    });
    function pushEnterKey()
    {
      if(event.keyCode == 13)
      {
        $scope.postText;
      }
    }

    window.document.onkeydown = pushEnterKey;
    */

    var questionValue = [];
    var errorMsg = [];
    //質問と回答の番号はセット（同じ）で回数を計測
    var allCnt = 0;
    //成功した回数
    var successCnt = 0;
    //失敗した回数
    var errorCnt = 0;




    //質問の設定
    questionValue[0] = '名前は？';
    questionValue[1] = '性別は？  男性は1 女性は2 を入力';
    questionValue[2] = '出身は？';
    questionValue[3] = '年齢は？';
    questionValue[4] = '住所は？';
    for(var o=5; o<10; o++)
    {
      questionValue[o] = '質問'+o+'の内容';
    }

    //エラーメッセージの設定
    errorMsg[0] = "入力に誤りがあります。もう一度";
    errorMsg[1] = "入力に誤りがあるようですね。";
    errorMsg[2] = "質問にちゃんと答えましょう。";
    errorMsg[3] = "しっかりしてください。";
    errorMsg[4] = "違う。日本語わかりますか。";

    //itemsにプロパティの設定
    $scope.items = [ { question: questionValue[0], answer: ''} ];



    $scope.postText = function()
    {
      //次の数字をセット
      var successNext = successCnt + 1;
      var allNext = allCnt + 1;

      //乱数の作成
      var random =  Math.floor( Math.random() * errorMsg.length );
      //console.log("random:"+ random);


      //入力欄に文字が入っているとき
      if(this.inputText)
      {
        //get input box value
        var textValue = this.inputText;
        console.log("回答"+ allCnt +":"+ textValue);

        //回答者と回答を表示(jQuery未動作のため未実装　【原因】jQueryとangularjsの競合？)
        //$("#answer"+index).css("backgroundColor","red");
        //$("#answer").addClass("");
        //$("#answer"+index).addClass("displayon");

        //バリデーションの実行
        if( validation(successCnt, textValue) == true)
        {

          //番号に応じた質問と答えをセット
          //$scope.items[$data.num] = ({ question: questionValue[$data.num], answer: textValue });
          $scope.items[allCnt].answer =  textValue;
          $scope.items.push({ question: questionValue[successNext] });

          //成功時に実行
          success();
        }else{

          //エラーメッセージと質問と答えをセット
          //$scope.items[$data.num] = ({ question: questionValue[$data.num], answer: textValue });
          $scope.items[allCnt].answer = textValue;
          $scope.items.push({ question: errorMsg[random] + "   " + questionValue[successCnt]  });

          //失敗時に実行
          error();
        }


        //新しい質問部分に移動
        var nextQuesLocation = 'question' + allNext;
        $location.url("#"+nextQuesLocation, null);



        //$location.path(nextQuesLocation);
        //$location.hash(nextQuesLocation);
        //$anchorScroll.yOffset = 100;
        //var locUrl = "file:///Users/hayashi/Documents/develop/move_form/sp_form/www/index.html#"+nextQuesLocation;
        //$location.absUrl() == locUrl
        //$location.path() == nextQuesLocation
        /*
        if($location.hash() != nextQuesLocation)
        {
          $location.hash('answer' + next);
        }else{
          $anchorScroll.yOffset = 50;
        }
        */

        /*
        var nowBox = "box" + index;
        $scope.nowBox = false;
        */

        $scope.inputText = "";　//$scope.inputTextの中身をクリア

        //$scope.$apply();   //画面の更新(itemの更新処理はなぜか自動で行われている)

      }else{
        alert("文字が入力されていません。");
      }

    };


    function validation(index, text)
    {

      //名前のバリデーション
      if( index == 0)
      {
        if( text.match(/^[亜-熙ぁ-んァ-ン]+$/) )
        {
          return true;
        }
      }

      //性別のバリデーション
      if(index == 1)
      {
        if( text.match(/^[0-9]+$/) )
        {
          return true;
        }
      }

      //出身のバリデーション
      if(index == 2)
      {
        if( text.match(/^[亜-熙ぁ-んァ-ン]+$/) )
        {
          return true;
        }
      }

      //年齢のバリデーション
      if(index == 3)
      {
        if( text.match(/^[0-9]+$/) )
        {
          return true;
        }
      }

      //住所のバリデーション
      if(index == 4)
      {
        if( text.match(/^[亜-熙ぁ-んァ-ン]+$/) )
        {
          return true;
        }
      }


      return false;
    }


    //成功時
    function success()
    {
      allCnt++;
      successCnt++;
    }


    //失敗時
    function error()
    {
      allCnt++;
      errorCnt++;
    }



  });


  module.factory('$data', function() {
      var data = {};

      return data;
  });


})();
