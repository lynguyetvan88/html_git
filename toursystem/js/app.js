/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module('main',[]);

myApp.controller('copyright', ['$scope', function($scope) {
  $scope.title ="Copyright 2010 © Southern Breeze JSC.,. All rights reserved.";
   $scope.img ="logo_foo_03.png";
}])
    .controller('banner_maketting',['$scope', function($scope){
            $scope.title ="Demo";
            $scope.names=[
        {name:'http://www.toursystem.biz/uploads/banner/14180905602_.jpg'},
        {name:'http://www.toursystem.biz/uploads/banner/14180907203_.jpg'},
        {name:'http://www.toursystem.biz/uploads/banner/14180907612.jpg'},
        {name:'http://www.toursystem.biz/uploads/banner/14180908431.jpg'},
        {name:'http://www.toursystem.biz/uploads/banner/14180964413.jpg'},
        {name:'http://www.toursystem.biz/uploads/banner/14180905602_.jpg'},
        {name:'http://www.toursystem.biz/uploads/banner/14180907203_.jpg'},
        {name:'http://www.toursystem.biz/uploads/banner/14180905602_.jpg'}];
    }])
;