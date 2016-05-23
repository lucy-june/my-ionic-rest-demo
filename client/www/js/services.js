angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId'); //for web
    // return $resource('http://10.0.2.2:5000/sessions/:sessionId'); //for android app
});