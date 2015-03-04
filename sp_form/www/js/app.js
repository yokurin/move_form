(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {

  });

  module.controller('HomeController', function($scope, $data) {

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


    //formに遷移
    $scope.go_to_form = function() {
      $scope.ons.navigator.pushPage('form.html');//, {title : selectedItem.title});
    };

  });


  module.controller('FormController', function($scope, $data, $location, $anchorScroll) {

    //add items propaty（これを行わないと動かない）
    $scope.items = [ { question: '名前は？', answer: ''} ];

    //質問項目や回答の順番をみるためにオブジェクトで変数をセット
    $data.num = 0;

    /*
    var update = function(index) {
      $('#answer'+index).css('display','');
    };
    */

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
    var errorMsg = "";




    //質問の設定
    questionValue[$data.num] = '名前は？';
    questionValue[$data.num+1] = '性別は？  男性は1 女性は2 を入力しろ';
    questionValue[$data.num+2] = '出身は？';
    questionValue[$data.num+3] = '年齢は？';
    questionValue[$data.num+4] = '住所は？';
    //questionValue[5] = '質問６';
    //questionValue[6] = '質問７';
    for(var o=5; o<10; o++) //oはループ変数
    {
      questionValue[o] = '質問'+o+'の内容';
    }

    //エラーメッセージの設定
    errorMsg = "は？もう一度！";



    $scope.postText = function()
    {

      //indexの位置が質問と回答に一致するように
      //$data.num = index;
      var next = $data.num + 1;



      //入力欄に文字が入っているとき
      if(this.inputText)
      {
        //get input box value
        var textValue = this.inputText;
        console.log("回答"+$data.num+":"+ textValue);

        //回答者と回答を表示(jQuery未動作のため未実装　【原因】jQueryとangularjsの競合？)
        //$("#answer"+index).css("backgroundColor","red");
        //$("#answer").addClass("");
        //$("#answer"+index).addClass("displayon");

        //バリデーションの実行
        if( validation($data.num, textValue) == true)
        {

          //番号に応じた質問と答えをセット
          //$scope.items[$data.num] = ({ question: questionValue[$data.num], answer: textValue });
          $scope.items[$data.num].answer =  textValue;
          $scope.items.push({ question: questionValue[next] });

        }else{

          //エラーメッセージと質問と答えをセット
          //$scope.items[$data.num] = ({ question: questionValue[$data.num], answer: textValue });
          $scope.items[$data.num].answer = textValue;
          $scope.items.push({ question: questionValue[$data.num]  });

        }

        /*
        //番号に応じた質問と答えをセット
        $scope.items[index] = ({ question: questionValue[index], answer: textValue });
        $scope.items.push({ question: questionValue[next] });
        */


        //新しい質問部分に移動
        var nextQuesLocation = 'question' + next;
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

        $scope.inputText = "";　//$scopeの中身をクリア

        //質問を繰り返したり、次の質問へ移動するため +1
        $data.num = $data.num + 1;

        //$scope.$apply();   //画面の更新(itemの更新処理はなぜか自動で行われている)

      }else{
        alert("文字が入力されていません。");
      }

    };

    function validation(index, text)
    {
        //名前のバリデーション
        if($scope.items == questionValue[$data.num])
        {
          if( text.match(/^[亜-熙ぁ-んァ-ン]+$/) )
          {
            return true;
          }
        }

        //性別のバリデーション
        if($scope.items == questionValue[$data.num+1])
        {
          if( text.match(/^[0-9]+$/) )
          {
            return true;
          }
        }

        //出身のバリデーション
        if($scope.items == questionValue[$data.num+2])
        {
          if( text.match(/^[亜-熙ぁ-んァ-ン]+$/) )
          {
            return true;
          }
        }

        //年齢のバリデーション
        if($scope.items == questionValue[$data.num+3])
        {
          if( text.match(/^¥d+$/) )
          {
            return true;
          }
        }


        return false;
    }



  });


  module.factory('$data', function() {
      var data = {};

      return data;
  });


})();
