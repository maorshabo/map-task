function appConfig(uiGmapGoogleMapApiProvider) {
    "ngInject";
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyASMaMqg8QSLSW_6YyEYx5U7CVwmzrlldk',
        // v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    })
}

export default appConfig;