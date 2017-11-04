class GoogleMapController {
    constructor(uiGmapGoogleMapApi) {
        "ngInject";
        this._uiGmapGoogleMapApi = uiGmapGoogleMapApi;
    }


    $onInit() {
        this.map = {center: {latitude: 45, longitude: -73}, zoom: 8};
        this.infoOpts = {
            coords: [45, -73],
            templateUrl: 'infoWindow.html',
            shown: false
        };

        this._uiGmapGoogleMapApi.then(function (maps) {
            // console.log(maps);
        });
    }
}

export default GoogleMapController;