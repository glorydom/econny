angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('eCOnnY', {
      url: '/econny',
      templateUrl: 'templates/eCOnnY.html',
      controller: 'eCOnnYCtrl'
    })
        
      
    
      
        
    .state('plantList', {
      url: '/list',
      templateUrl: 'templates/plantList.html',
      controller: 'plantListCtrl'
    })
        
      
    
      
        
    .state('livingRoom', {
      url: '/living',
      templateUrl: 'templates/livingRoom.html',
      controller: 'livingRoomCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/econny');

});