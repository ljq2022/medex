angular.module("MyApp",["ngRoute"]).config(config);

function config($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl: "angular-app/main/main.html",
      controller: "MainController"
    })
    .when("/hospitalregistration",{
      templateUrl: "angular-app/hospitalregistration/hospitalregistration.html",
      controller: "hospitalregistrationcontroller"
    })
    .when("/hospitallogin",{
      templateUrl: "angular-app/hospitallogin/hospitallogin.html",
      controller: "hospitallogincontroller"
    })
    .when("/hospitalhomepage",{
      templateUrl: "angular-app/hospitalhomepage/hospitalhomepage.html",
      controller: "hospitalhomepagecontroller"
    })
    .when("/status",{
      templateUrl: "angular-app/viewstatus/viewstatus.html",
      controller: "viewstatusController"
    })
    .when("/donate",{
      templateUrl: "angular-app/donateDevice/donateDevice.html",
      controller: "donateDeviceController"
    })
    .when("/request",{
      templateUrl: "angular-app/requestDevice/requestDevice.html",
      controller: "requestDeviceController"
    });
}
