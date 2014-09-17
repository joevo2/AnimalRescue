angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('SubmissionsCtrl', function($scope,
  $ionicPopover, Submission) {
  Submission.query(function(response) {
    $scope.submissions = [];
    angular.forEach(response.items, function(item) {
      var submission = new Submission();
      submission.username = item.username;
      submission.description = item.description;
      submission.id = item.id;

      submission.photo = item.photo;
      submission.location = item.location; //TODO: code to get location
      submission.animal_type = item.animal_type;
      submission.creation_date = item.creation_date;
      $scope.submissions.push(submission);
    });

  });

  $scope.addSubmission = function() {
    var submission = new Submission();
    // Pop up image upload option
      $ionicPopover.fromTemplateUrl('my-popover.html', {
        scope: $scope,
      }).then(function(popover) {
        $scope.popover = popover;
      });
      $scope.openPopover = function($event) {
        $scope.popover.show($event);
      };
      // submission.photo = get from code above
      submission.photo = ''; // TODO: get photo from camera
      submission.description = $scope.Description;
      submission.creation_date = new Date();
      submission.animal_type = $scope.animal_type;
      submission.location = 'here'; //TODO: code to get location
      submission.username = $scope.username;

      // Inform user that their submission is saved
  }
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


.controller('Geolocal', function GetCountry($scope, $http) {
   $http.get('http://ipinfo.io/json').
     success(function(data) {
       $scope.location = data;
       $scope.city = 'en';
   });
 })
