angular.module('angRails')
  .directive('testParagraph', [function(){
    return {
      templateUrl: "welcome.html",
      restrict: 'E',
      controller: function($scope){
        var ctrl = this;

        ctrl.sayHi = function(person){
          ctrl.sayingHi = true;
        }
      },
      controllerAs: 'paraCtrl'
    };
  }]);
