angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

// .controller('SubmissionsCtrl', function($scope, Submission) {
//   console.log('DEBUG: SubmissionsCtrl');
//   Submission.query(function(response) {
//     $scope.submissions = [];
//     angular.forEach(response.items, function(item) {
//       submission.username = item.username;
//       submission.description = item.description;
//       submission.id = item.id;
//       submission.photo = item.photo;
//       submission.location = item.location; //TODO: code to get location
//       submission.animal_type = item.animal_type;
//       submission.creation_date = item.creation_date;
//       $scope.submissions.push(submission);
//
//
//
//     });
//
//   });
//
//   $scope.item = { username : '',
//                   photo : '',
//                   description : 'No description.',
//                   creation_date : '',
//                   animal_type : 'cat',
//                   location : ''};
//
//   $scope.addSubmission = function() {
//       console.log($scope.submissions);
//       var submission = new Submission();
//
//       submission.username = 'blah';
//       submission.photo = item.lastPhoto; // : get photo from camera
//       submission.description = item.description;
//       submission.creation_date = new Date();
//       submission.animal_type = item.animal_type;
//       submission.location = 'here'; //: code to get location
//       $scope.submissions.push(submission);
//
//
//       //Inform user that their submission is saved
//   }
// })

.controller('SubmissionDetailCtrl', function($scope, $stateParams, Submissions) {
  $scope.submission = Submissions.get($stateParams.submissionId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('Submit', function($scope) {
  $scope.item = { username : '',
                  photo : '',
                  description : '',
                  location: '',
                  creation_date : '',
                  animal_type : '',
                  location : ''};


  $scope.addSubmission = function() {
    getGeo();
    $scope.item.creation_date = (new Date).toLocaleFormat("%A, %B %e, %Y");
  }

  //$scope.getGeo = function($scope, $cordovaGeolocation) {


})

function getGeo($scope, $cordovaGeolocation) {

  $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });

  // begin watching
  var watch = $cordovaGeolocation.watchPosition({ frequency: 1000 });
  watch.promise.then(function() { /* Not  used */ },
    function(err) {
      // An error occurred.
    },
    function(position) {
      $scope.item.location = position.coords.latitude + "," +
                            position.coords.longitude;
  });

  // clear watch
  $cordovaGeolocation.clearWatch(watch.watchID)

}
