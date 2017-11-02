var app = angular.module('app', ['chart.js'])

    .controller('ChartController', function($scope, $http,$interval) {
  $scope.theTime = new Date().toLocaleTimeString();
  

        $scope.displayChart = function() {

           $http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(

                function(response) {
					
                    $scope.labels = [];
                    $scope.data = []; 

                   var chartData = response.data;
					console.log(chartData);
                    chartData.forEach(function(obj) {
                        $scope.labels.push(obj.name);
                        $scope.data.push(obj.price_usd);
						console.log(obj.price_usd);
                    }); 

                }
            ) 

        }
		 $scope.displayChart();
  $interval(function () {
      $scope.displayChart();
	   $scope.theTime = new Date().toLocaleTimeString();
  }, 300000);

    });