class GoogleMapController {
    constructor(uiGmapGoogleMapApi, $scope) {
        "ngInject";
        this._$scope = $scope;
        this._uiGmapGoogleMapApi = uiGmapGoogleMapApi;
    }


    $onInit() {
        this.markers = [];
        this.map = {
            center: this.center,
            zoom: 8,
            control: {}
        };

        this._uiGmapGoogleMapApi.then(function (maps) {
            // console.log(maps);
        });

        this._$scope.$watch('vm.center', (newValue) => {
            if (newValue) {
                console.log('move to: ' + JSON.stringify(newValue));
                this.map.control.refresh(newValue);
            }
        });

        this._$scope.$watch('vm.selectedMarker', (selectedUser) => {
            if (selectedUser) {
                console.log('move to: ' + JSON.stringify(selectedUser.coordinates));
                let marker = this.findMarkerById(selectedUser._id);
                if (marker) {
                    this.closeAllWindowInfos();
                    marker.infoWindow.visible = true;
                    this.map.zoom = 4;
                    this.map.control.refresh(marker.coordinates);
                }
            }
        });

        this._$scope.$watch('vm.users', (newValue) => {
            if (newValue) {
                console.log(`process ${newValue.length} markers`);
                this.markers = this.parseMarkers(newValue);
            }
        });
    }

    parseMarkers(markers) {
        return markers.map(marker => {
            marker.infoWindow = {
                visible: false
            };
            return marker;
        });
    }

    closeAllWindowInfos() {
        this.markers.map(marker => marker.infoWindow.visible = false);
    }

    onMarkerClick(marker) {
        this.closeAllWindowInfos();
        marker.infoWindow.visible = !marker.infoWindow.visible;
    }

    onWindowCloseClick(marker) {
        marker.infoWindow.visible = false;
    }

    findMarkerById(markerId) {
        return this.markers.find(marker => {
            return marker._id === markerId;
        });
    }
}

export default GoogleMapController;