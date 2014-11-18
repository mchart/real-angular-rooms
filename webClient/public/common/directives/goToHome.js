angular.module('ngRooms.common').directive('goToHome', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                $window.location.href= "/";
            });
        }
    };
}]);
