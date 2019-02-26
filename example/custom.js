(function(){
"use strict";
'use strict';


var app = angular.module('viewCustom', ['my-demo']);


angular
  .module('my-demo', [])    //this should match the value for module.exports in index.js
  .component('prmActionContainerAfter', {
  bindings: { parentCtrl: '<' },
    controller: function controller($scope) {
        this.$onInit = function() {
          console.log("my demo!");
        };
    },
  template: '<div>PCSG DEMO mor stuff!</div>'
});





})();
