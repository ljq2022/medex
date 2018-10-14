angular.module("MyApp").controller('hospitalhomepagecontroller', hospitalhomepagecontroller);
function hospitalhomepagecontroller($scope, $http){
    $scope.newHospitalName = '';
    $scope.addHospitalName = function () {
    $http.get("http://medexduke.herokuapp.com/hospitals", { newRule: $scope.newHospitalName})
        .success(function (result) {

            console.log(result);
            $scope.newHospitalName = result;
            $scope.newRule = '';

        })
        .error(function (data, status) {

            console.log(data);

        });
};
}
