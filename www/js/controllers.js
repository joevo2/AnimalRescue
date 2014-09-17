angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('SubmissionsCtrl', function($scope,
  $ionicPopover, Submissions) {
  $scope.submissions = Submissions.all();

  // Pop up image upload option
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

})

.controller('SubmissionDetailCtrl', function($scope, $stateParams, Submissions) {
  $scope.submission = Submissions.get($stateParams.submissionId);
})

.controller('AccountCtrl', function($scope) {
});

module.controller('GeoCtrl', function($scope, $cordovaGeolocation) {

  $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });

})
