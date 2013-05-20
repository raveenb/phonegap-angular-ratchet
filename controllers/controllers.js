app.controller('MainCtrl', function ($scope, alarmService) {

  init();

  function init() {
    $scope.alarms = alarmService.getAlarms();
    console.log('MainCtrl init');
  };

});

app.controller('DetailsCtrl', function ($scope, $routeParams, alarmService) {

  init();

  function init() {
    console.log('DetailsCtrl init');
    var alarmId = ($routeParams.alarmId) ? parseInt($routeParams.alarmId) : 0;
    if (alarmId >= 0) {
        $scope.alarm = alarmService.getAlarm(alarmId);
    }    
  };

});

app.controller('CreateCtrl', function ($scope, $location, alarmService) {

  init();

  function init() {
    console.log('CreateCtrl init');
  }

  $scope.createAlarm = function() {
		console.log('CreateCtrl createAlarm');
    
		var d = $scope.date;
    var t = $scope.time;
    var m = $scope.msg;
    
		alarmService.addAlarm(d, t, m);
    
		$scope.date = '';
    $scope.time = '';
    $scope.msg = '';
		
		console.log($location.path());
		$location.path('/');
  };
});