angular.module('ngRooms', [
  'ngRoute',
  'restangular',
  'satellizer',
  'ngRooms.common',
  'ngRooms.domain'
]).

config(['$routeProvider', '$locationProvider', '$authProvider', 'RestangularProvider',   
    function ($routeProvider, $locationProvider, $authProvider, restangularProvider) {

    $routeProvider
        .when('/', { templateUrl: '/domain/landingPage/landingPage.html' })
        .when('/analytics', { templateUrl: '/domain/analytics/analytics.html' })
        .when('/cancellationPolicy', { templateUrl: '/domain/cancellationPolicy/cancellationPolicy.html' })    
        .when('/rate', { templateUrl: '/domain/rate/rate.html' })
        .when('/supplement', { templateUrl: '/domain/supplement/supplement.html' })
        .when('/tutorial', { templateUrl: '/domain/tutorial/tutorial.html' })

        .when('/rooms', { 
            templateUrl: '/domain/room/rooms.html',
            controller: 'RoomsController' })
        .when('/rooms/new', { 
            templateUrl: '/domain/room/room.html',
            controller: 'RoomController' })
        .when('/rooms/edit/:id', { 
            templateUrl: '/domain/room/room.html',
            controller: 'RoomController' })
        .when('/cancellationPolicies',       { 
            templateUrl: '/domain/cancellationPolicy/cancellationPolicies.html',
            controller: 'CancellationPoliciesController'})
        .when('/cancellationPolicies/new',       { 
            templateUrl: '/domain/cancellationPolicy/cancellationPolicy.html',
            controller: 'CancellationPolicyController'
        })
        .when('/cancellationPolicies/edit/:id',       { 
            templateUrl: '/domain/cancellationPolicy/cancellationPolicy.html',
            controller: 'CancellationPolicyController'
        })
        .when('/supplements', {
            templateUrl: '/domain/supplement/supplements.html',
            controller: 'SupplementsController' })
        .when('/supplements/new', {
            templateUrl: '/domain/supplement/supplement.html',
            controller: 'SupplementController' })
        .when('/supplements/edit/:id', {
            templateUrl: '/domain/supplement/supplement.html',
            controller: 'SupplementController' });

    $routeProvider.otherwise({ redirectTo: '/rooms' });
    
    $locationProvider.html5Mode(true);

    restangularProvider.setBaseUrl('/api');

    $authProvider.google({      
        url: 'api/auth/google',
        clientId: '279805487456-u3c7d5rpqqenunrgt2ia0p91h1198n4b.apps.googleusercontent.com'
    });

}]);