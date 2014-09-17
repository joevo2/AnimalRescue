angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Submissions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var submissions = [
    { id: 0, username: 'joe', description: 'Scruff McGruff', photo: '10101010', location: 'Cheras, Kuala Lumpur', animal_type: 'cat', creation_date: '20140917' },
    { id: 1, username: 'menghong', description: 'Woof Woof', photo: '10101010', location: 'Ampang, Kuala Lumpur', animal_type: 'dog', creation_date: '20140917' },
    { id: 2, username: 'hanxue', description: 'Meow Meow', photo: '10101010', location: 'Kuantan, Pahang', animal_type: 'cat', creation_date: '20140917' },
    { id: 3, username: 'cheethong', description: 'Meeeeew', photo: '10101010', location: 'Batu Mertajam, Pulau Pinang', animal_type: 'cat', creation_date: '20140917' }
  ];

  return {
    all: function() {
      return submissions;
    },
    get: function(submissionId) {
      // Simple index lookup
      return submissions[submissionId];
    }
  }
})

.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])

.factory('Submission', function($resource) {
  var Submission = $resource('/_ah/api/submission/v1/submissions/:id', {id: '@id'}, {
    query: {method: 'GET', isArray: false},
    update: {method: 'PUT'}
  });
  return Submission;
})
