(function() {
	angular
		.module("App", [])
		.controller("myController", myController);
		// .controller("mysecondController", controller2);
		
		function myController ($scope) {
			$scope.customers = [{
				name: 'Sujit',
				place: 'Paris'
			},{
				name: 'Manu',
				place: 'India'
			},{
				name: 'Saddu',
				place: 'India'
			},{
				name: 'Nuzha',
				place: 'India'
			},{
				name: 'Duffer',
				place: 'KV'
			}];

			$scope.myClickFunction = myfunction;

			function myfunction (index) {
				alert("click action " + index);
			}
		}

})()