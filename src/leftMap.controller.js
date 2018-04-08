
app.controller('leftMapCtrl', function($scope, $timeout, $dataLeftService, $mapService) {

    $scope.my_data = $dataLeftService.treedata_geography;
    // console.log($dataLeftService);
    $scope.my_tree_handler = function(branch) {
        // $scope.my_data.splice(branch.label, 1);
        $mapService.setData(branch);

        // console.log(branch);
    }


});
