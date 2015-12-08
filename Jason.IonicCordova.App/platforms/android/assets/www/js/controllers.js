angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('MapCtrl', ['$scope', '$timeout',
    function ($scope, $timeout) {
        var longitude = 121.506191;
        var latitude = 31.245554;
        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            city: 'ShangHai',
            markers: [{
                longitude: longitude,
                latitude: latitude,
                width: 49,
                height: 60,
                title: 'Where',
                content: 'Put description here'
            }]
        };

        $timeout(function () {
            $scope.mapOptions.center.longitude = 121.500885;
            $scope.mapOptions.center.latitude = 31.190032;
            $scope.mapOptions.markers[0].longitude = 121.500885;
            $scope.mapOptions.markers[0].latitude = 31.190032;
        }, 5000);
    }
]);
