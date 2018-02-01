(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
 LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope) {
	 $scope.lunchCheck = function () {
		 var number = countNum($scope.lunch);
		 $scope.message = postMessage(number);
 };
 function countNum(lunch) {
	 var count =0 ;
	 if (lunch){
		 var arr =lunch.split(',');
		 for(var index in arr) {
			 if(arr[index].trim().length != 0){
				 count++;
			 }
		 }
	 }
	 return count;
 }
 function postMessage(number) {
	 if(number === 0){
		 return 'Please Enter your lunch';
	 }
	 else if (number <= 3){
		 return 'Enjoy!';
	 }
	 else {
		 return 'Too Much !'
	 }
	 
 }
 }
})();