myApp.directive('task', function(){
	return{
		resrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'templates/task.html',
		controller: function($scope, $http){
			var refresh = function() {
		  		$http.get('/contactlist').success(function(response) {
		    	$scope.contactlist = response;
		    	$scope.task = "";
		  	});
		};
		refresh();
		$scope.remove = function(id) {
		  	$http.delete('/contactlist/' + id).success(function(response) {
		    refresh();
		  });
		};

		}
	}

});




