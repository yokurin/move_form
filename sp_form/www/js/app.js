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
    $scope.items = [ { question: 'お名前を教えてください' } ];

    //$scope.num = 0;

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


    $scope.postText = function(index)
    {
      var questionValue = [];
      var next = index + 1;
      questionValue[0] = 'お名前を教えてください';
      questionValue[1] = '性別を教えてください';
      questionValue[2] = '出身を教えてください';
      questionValue[3] = '年齢を教えてください';
      questionValue[4] = '住所を教えてください';
      //questionValue[5] = '質問６';
      //questionValue[6] = '質問７';
      for(var o=5; o<100; o++) //oはループ変数
      {
        questionValue[o] = '質問'+o+'の内容';
      }

      if(this.inputText)
      {
        //get input box value
        var textValue = this.inputText;
        console.log("回答"+index+":"+ textValue);

        //回答者と回答を表示(jQuery未動作のため未実装　【原因】jQueryとangularjsの競合？)
        //$("#answer"+index).css("backgroundColor","red");
        //$("#answer").addClass("");
        //$("#answer"+index).addClass("displayon");

        //番号に応じた質問と答えをセット
        $scope.items[index] = ({ question: questionValue[index], answer: textValue });
        $scope.items.push({ question: questionValue[next] });


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

        //$scope.$apply();   //画面の更新(itemの更新処理はなぜか自動で行われている)

      }else{
        alert("文字が入力されていません。");
      }

    };



  });


  module.factory('$data', function() {
      var data = {};

      return data;
  });


})();
