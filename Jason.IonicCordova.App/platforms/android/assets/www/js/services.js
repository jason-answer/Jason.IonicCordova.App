angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Jason Chen',
    lastText: 'You on your way?',
    face: 'http://image1.xcarimg.com/attachments/my/0/39/75/651_120.jpg?r=2015120717'
  }, {
    id: 1,
    name: 'Hermin Hua',
    lastText: 'Hey, it\'s me',
    face: 'https://api.skype.com/users/hermin.hua/profile/avatar?auth_key=2040433016&cacheHeaders=1'
  }, {
    id: 2,
    name: 'Yeoman Liu',
    lastText: 'Did you get the ice cream?',
    face: 'https://api.skype.com/users/yeoman.liu/profile/avatar?auth_key=-1415352736&cacheHeaders=1'
  }, {
    id: 3,
    name: 'Allen Zhu',
    lastText: 'I should buy a boat',
    face: 'https://api.skype.com/users/zhuyilun8/profile/avatar?auth_key=2128639909&cacheHeaders=1'
  }, {
    id: 4,
    name: 'Emliy Zhang',
    lastText: 'Look at my mukluks!',
    face: 'https://api.skype.com/users/live:emily.zhang_8/profile/avatar?auth_key=1199338349&cacheHeaders=1'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
