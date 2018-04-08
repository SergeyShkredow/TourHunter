app.service('$mapService', function(){


    this.data = {};
    this.getData = function () {
        return this.data;
    };

    this.setData = function (mapItem) {
        this.data.label = mapItem.label;
        this.data.lat = mapItem.lat;
        this.data.lng = mapItem.lng
    };
});