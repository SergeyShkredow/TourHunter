// app.controller('rightMapCtrl', function($scope, $timeout, mapService) {
//
//
//     // $scope.my_select = $dataRightService.my_select;
//     $scope.mapItem = [];
//     $scope.my_select = [
//         { label: 'Kherson', lat: 50.90, lng: 34.78},
//         { label: 'Sumy', lat: 50.51, lng: 30.47}
//     ];
//     // $timeout(function(){
//     //     $scope.mapItem = $mapService.getData();
//     //     $scope.my_select.push($scope.mapItem);
//     // },3000);
//     // $scope.$on('parent', function (event, data) {
//     //     console.log(data); // 'Some data'
//     // });
//     //
//     // var getNewMap = function (){
//     //     $scope.mapItem = mapService.getData();
//     //     $scope.my_select.push($scope.mapItem);
//     // };
//     //
//     // $scope.$watch('result', getNewMap);
//     // console.log($scope.my_select);
//
//     //delete at right column
//     $scope.deleteListItem = function (array, index) {
//         $scope.my_select.splice(index, 1);
//     }
// });