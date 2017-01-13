(function(){
  'use strict';
angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Vivek";
$scope.sayMessage = function (){
  return  "Vivek like car driving"
};
}
})();
