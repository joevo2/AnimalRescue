angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('SubmissionDetailCtrl', function($scope, $stateParams, Submissions) {
  $scope.submission = Submissions.get($stateParams.submissionId);
})

.controller('AccountCtrl', function($scope) {

})

.controller('Submit', function($scope, $location) {
  $scope.item = { username : '',
                  photo : '',
                  description : '',
                  location: '',
                  creation_date : '',
                  animal_type : ''};


  $scope.addSubmission = function() {
    $scope.item.creation_date = new Date();
    $location.path("/dash");
  }

  $scope.locationButton = function() {
    getLoc($scope);
  }
})

function getLoc($scope) {
  //Get location
  var onSuccess = function(position) {
      $scope.item.location = position.coords.latitude+","+position.coords.longitude;
  };

  // onError Callback receives a PositionError object
  function onError(error) {
  }

  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
