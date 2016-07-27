angular.module('techNodeApp').controller('RoomCtrl', function ($scope, socket) {
    $scope.messages = [];
    socket.emit('getAllMessages');
    socket.on('allMessage', function (messages) {
        $scope.messages = messages;
    });
    socket.on('messageAdded', function (message) {
        $scope.messages.push(message);
    });
});