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

.controller('AccountCtrl', function($scope, auth) {
  $scope.login = function() { 
    console.log('login fired');
    auth.signin({ popup: true, standalone: true }, 
                  // success handler:
                  function() {}, 
                  // failure handler:
                  function() {
                    alert("Oops. Something went wrong.");
                  }
      ); 
    }
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
  //
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }

  navigator.geolocation.getCurrentPosition(onSuccess, onError);

}

//Push notification module
module.controller('Push', function($scope, $cordovaPush) {

  var androidConfig = {
    "senderID":"replace_with_sender_id",
    "ecb":"onNotification"
  };

  var iosConfig = {
    "badge":"true",
    "sound":"true",
    "alert":"true",
    "ecb":"onNotificationAPN"
  };

  $cordovaPush.register(config).then(function(result) {
      // Success!
  }, function(err) {
      // An error occured. Show a message to the user
  });


  $cordovaPush.unregister(options).then(function(result) {
      // Success!
  }, function(err) {
      // An error occured. Show a message to the user
  });

  // iOS only
  $cordovaPush.setBadgeNumber(2).then(function(result) {
      // Success!
  }, function(err) {
      // An error occured. Show a message to the user
  });

});
