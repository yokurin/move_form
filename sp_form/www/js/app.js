(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {

  });

  module.controller('HomeController', function($scope, $data) {

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


  module.controller('FormController', function($scope, $data) {

    $scope.items = [
        {
            question: '名前は？'
            //answer: 'テスト'
        }/*,
        {
            question: '性別は？',
            answer: '男'
        },
        {
            question: '誕生日は？',
            answer: '2015/2/20'
        },
        {
            question: '出身は？',
            answer: '東京'
        }*/
    ];

    $data.num = 0;



    $scope.postText = function(num)
    {
      if(this.inputText)
      {
        //get input box value
        var textValue = this.inputText;
        console.log("入力内容:"+ textValue);

        $('question_Box').css('display','block');

        $scope.items[num] = ({ question: '名前は？' , answer: this.inputText });

        $scope.items.push({ question: '性別は？' });
        $scope.inputText = "";　//ボックスのクリア
        $scope.$apply();   //画面の更新
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
