angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('SubmissionsCtrl', function($scope, Submissions) {
  $scope.submissions = Submissions.all();
})

.controller('SubmissionDetailCtrl', function($scope, $stateParams, Submissions) {
  $scope.submission = Submissions.get($stateParams.submissionId);
})

.controller('AccountCtrl', function($scope) {
});
