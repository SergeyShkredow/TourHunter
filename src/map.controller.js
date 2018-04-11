
cities_Ukraine = [
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

var select_cities = ['Kherson', 'Sumy'];

app.controller('mapCtrl', function($scope, $timeout) {

    $scope.my_data = cities_Ukraine;

    $scope.my_tree = tree = {};

    $scope.my_select = select_cities;


    $scope.my_tree_handler = function(branch) {
        $scope.choice = branch;
        console.log( $scope.choice);
        // $scope.my_select.push($scope.choice);

    };

    var mymap = L.map('mapId').setView([46.55, 30.40], 4);


    const zoom = 18;
    const center = mymap.getCenter();
    var popup = L.popup();

    var test = [50.50, 30.80];

    var marker = L.marker(test).addTo(mymap);
    console.log(marker);


    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: zoom,
        attribution: 'Map data &copy; ' +
        '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);

    mymap.on('click', addMarker);

    function addMarker(e){
        var newMarker = new L.marker(e.latlng).addTo(mymap);
        console.log(e);
    }

    for (var i = 0; i < cities_Ukraine.length; i++){
        console.log((cities_Ukraine[i]));

    }

    //
    // var filter = function(arr, callback, thisArg) {
    //     var i, length = arr.length, results = [];
    //     for (i = 0; i < length; i = i + 1) {
    //         if (callback.call(thisArg, arr[i], i, arr)) {
    //             results.push(arr[i]);
    //         }
    //     }
    //     return results;
    // };

    $scope.deleteListItem = function (array, index) {
        $scope.my_select.splice(index, 1);
    }
});