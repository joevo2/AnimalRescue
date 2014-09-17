angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Submission', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var submissions = [
    { id: 0, description: 'Scruff McGruff', photo: '10101010', animal-type: 'cat', creation-date: '20140917' },
    { id: 0, description: 'Woof Woof', photo: '10101010', animal-type: 'dog', creation-date: '20140917' },
    { id: 0, description: 'Meow Meow', photo: '10101010', animal-type: 'cat', creation-date: '20140917' },
    { id: 0, description: 'Meeeeew', photo: '10101010', animal-type: 'cat', creation-date: '20140917' },
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
});
