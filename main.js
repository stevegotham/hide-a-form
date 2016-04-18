angular.module("app", []).controller("ctrl", ['$scope', myfunc]);
function myfunc($scope) {
    $scope.update = function() {
        $scope.username = $scope.name;
        $scope.books = $scope.favbooks;
        $scope.bio = $scope.about;
        $scope.libraries = $scope.libs;
    }
    $scope.show = false;
    $scope.hide = function() {
        $scope.show = !$scope.show;
    }
}
