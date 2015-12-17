angular.module('app.controllers', [])

  .controller('eCOnnYCtrl', function ($scope, $http, $state) {
    $scope.plantList = [];
    $http({
      method: 'GET',
      url: 'mock/myplants.json'
    }).success(function (response, header, config, status) {
      $scope.plantList = response;
    }).error(function (response, status) {
      consol.log(response, status);
    });

    $scope.gotoLivingroom = function () {
      $state.go('livingRoom')
    }
  })

  .controller('plantListCtrl', function ($scope) {

  })

  .controller('livingRoomCtrl', function ($scope, $http, $ionicScrollDelegate) {
    $scope.status = {};
    $scope.input = {userinput: null};
    $scope.messageOptions = [];

    $scope.sendMessage = function () {

      if ($scope.input.userinput) {
        $scope.messages.push(angular.extend({}, {
          content: '<p>' + $scope.input.userinput + '</p>',
          source: 'u'
        }));

        $http({
          method: 'POST',
          url: 'http://120.25.102.53/RockPlant/app/talk.do',
          data: {question: $scope.input.userinput}
        }).success(function (response, header, config, status) {
          console.log("======================================================== API =======================================================")
          if (response.content) {
            $scope.messages.push(angular.extend({}, {content: '<p>' + response.content + '</p>', source: 'e'}));
            $ionicScrollDelegate.scrollBottom(true);
          }
        }).error(function (response, status) {
          console.log("======================================================== ERROR =====================================================")
        })

        $scope.input.userinput = null;
        $ionicScrollDelegate.scrollBottom(true);
      }
    }

    $scope.requestData = function () {
      $http({
        method: 'GET',
        url: 'http://120.25.102.53/RockPlant/app/queryStatus.do'
        //url: '../mock/data.json'
      }).success(function (response, header, config, status) {
        $scope.status = {
          "air_hum_status": response[response.length - 1].air_hum_status,
          "light_status": response[response.length - 1].light_status,
          "soil_hum_status": response[response.length - 1].soil_hum_status,
          "temp_status": response[response.length - 1].temp_status
        };

        if (!$scope.messages) {
          angular.forEach(response, function (res) {
            if (res.content.indexOf('OK!') === -1) {
              $scope.messageOptions.push(angular.extend({}, {content: '<p>' + res.content + '</p>', source: 'e'}))
            }

          })
          $scope.messages = $scope.messageOptions.slice(0, $scope.messageOptions.length);
          setTimeout(function () {
            $ionicScrollDelegate.scrollBottom(true);
          }, 500);
        }
        else {
          angular.forEach(response, function (res) {
            if (res.content.indexOf('OK!') === -1) {
              $scope.messages.push(angular.extend({}, {content: '<p>' + res.content + '</p>', source: 'e'}));
            }
          })

          $ionicScrollDelegate.scrollBottom(true);
        }
        console.log("======================================================== API =======================================================")
      }).error(function (response, status) {
        //console.log(response,status);
        console.log("======================================================== ERROR =====================================================")
      });
    }
  })
