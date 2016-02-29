angular.module('angRails')
  .directive('testParagraph', [function(){
    return {
      templateUrl: "welcome.html",
      restrict: 'E'
    };
  }]);
