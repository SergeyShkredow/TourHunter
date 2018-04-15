
var cities_Ukraine = [
    {
        label: 'Eastern Europe',
        children: [
            {
                label: 'Ukraine',
                children: [
                    {
                        label: 'Kiev',
                        lat: 50.51,
                        lng: 30.47
                    },
                    {
                        label: 'Odessa',
                        lat: 46.45,
                        lng: 30.48
                    },
                    {
                        label: 'Lviv',
                        lat: 49.81,
                        lng: 24.01
                    }

                ]
            }, {
                label: 'Poland',
                children: ['Warsaw', 'Krakow', 'Wroclaw']
            }, {
                label: 'Germany',
                children: ['Berlin', 'Hamburg', 'Stuttgart']
            }
        ]
    }
];

var select_cities = ['Kherson','Sumy'];


app.controller('mapCtrl', function($scope, $timeout) {

    $scope.my_data = [];
    $scope.my_data = cities_Ukraine;

    $scope.arr_map = [];

    $scope.select_cities = [];
    $scope.select_cities = select_cities;


    var mymap = L.map('mapId').setView([46.55, 30.40], 4);
    const zoom = 18;
    const center = mymap.getCenter();
    var popup = L.popup();

    var addMarkerMapClick = function(e){
        var newMarker = new L.marker(e.latlng).addTo(mymap);
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    };

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpej' +
        'Y4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: zoom,
        attribution: 'Map data &copy; ' +
        '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);

    mymap.on('click', addMarkerMapClick);


    $scope.my_tree_handler = function(branch, branchFull) {
        var arr = branch.lat + ', ' + branch.lng + ', ' + branch.label;
        // $scope.arrAll = branchAll;

            if(branch.lat=== undefined && branch.lng === undefined) {
                return console.log(branchFull);
            }
        $scope.arrFull = arr.split(', ');
        $scope.arr_map = arr.split(', ', 2);
            console.log($scope.arr_map);
        addMarker($scope.arr_map);

    };

    var addMarker = function (arrItem) {
        var marker = new L.marker(arrItem).addTo(mymap);

        marker.on('mouseover', function () {
            addArrays(arrItem);
            removeItem(arrItem);

            console.log(marker);

        });
    };

    var addArrays = function (arrItem) {
        $scope.select_cities.push(arrItem);
        // $scope.update();
        console.log(arrItem);
    };

    var update = function () {

    };

    var removeItem = function (index) {
        var arr_remove = $scope.my_data.splice(index,1);
        console.log(arr_remove);
    };

    $scope.deleteListItem = function (array, index) {
        $scope.select_cities.splice(index, 1);
    }
});