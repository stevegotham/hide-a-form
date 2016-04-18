angular.module("app", []).controller("ctrl", ['$scope', myfunc]);
function myfunc($scope) {
    $scope.update = function() {
        $scope.username = $scope.name;
        $scope.books = $scope.favbooks;
        $scope.bio = $scope.about;
        $scope.libraries = $scope.libs;
    }
    $scope.show = true;
    $scope.hide = function() {
        $scope.show = !$scope.show;
    }
}


// <form ng-submit="submit()" ng-controller="ExampleController">
//   Enter text and hit enter:
//   <input type="text" ng-model="text" name="text" />
//   <input type="submit" id="submit" value="Submit" />
//   <pre>list={{list}}</pre>
// </form>