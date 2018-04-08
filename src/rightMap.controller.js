app.controller('rightMapCtrl', function($scope, $timeout, $dataRightService,$mapService) {


    $scope.my_select = $dataRightService.my_select;

    $scope.my_tree_handler = function(){
        $mapService.getData(mapItem);
        $scope.my_select.push(mapItem);
        console.log($scope.my_select);
    };


    //delete at right column
    $scope.deleteListItem = function (array, index) {
        $scope.my_select.splice(index, 1);
    }
});