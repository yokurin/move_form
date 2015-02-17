(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('tappaed');
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('HomeController', function($scope, $data) {
    $scope.items = $data.items;

    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};

      data.items = [
          {
              title: 'sample1',
              label: '4h',
              desc: 'あるとき。。'
          },
          {
              title: 'sample2',
              label: '6h',
              desc: 'ああああ'
          },
          {
              title: 'sample3',
              label: '1day ago',
              desc: 'ああああ'
          },
          {
              title: '4',
              label: '1day ago',
              desc: 'テスト'
          }
      ];

      return data;
  });
})();
