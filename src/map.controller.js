app.controller('mapCtrl', function($scope, $timeout,$dataLeftService) {


    $scope.mymap = L.map('mapId').setView([46.55, 30.40], 4);


    const zoom = 18;
    const center = $scope.mymap.getCenter();
    $scope.popup = L.popup();

    var test = [50.50, 30.80];
    // $scope.marker = L.marker([50.45, 30.40]).addTo($scope.mymap);
    $scope.marker = L.marker(test).addTo($scope.mymap);
    console.log($scope.marker);


    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: zoom,
        attribution: 'Map data &copy; ' +
        '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo($scope.mymap);

    $scope.mymap.on('click', addMarker);

    function addMarker(e){
        var newMarker = new L.marker(e.latlng).addTo($scope.mymap);
        console.log(e.latlng);
    }

    $scope.my_tree_handler = function(branch) {
        // $tourOptions.setData(branch);
        console.log(branch)
    }

});