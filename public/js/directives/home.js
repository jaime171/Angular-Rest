myApp.directive('home', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'templates/home.html',
		link: function(scope, element, attrs){
			var n = 1;
			scope.click = function(){
				var target =  document.getElementById('all_text').className = '';
				scope.title = "their task has been added successfully " + "(" + n + ")";
				n += 1;
			}
		},

		controller: function($scope, $http){
			$scope.addContact = function() {
			  	$http.post('/contactlist', $scope.contact).success(function(response) {
			    console.log(response);
			  	});
			};
		}
	};
});
