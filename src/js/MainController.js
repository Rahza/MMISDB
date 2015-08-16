DataManagement.MainController = (function() {
    var that = {},
        $body = null,
        controlsView = null,
        addDriver = null,
        dbController = null,
        
        init = function() {
            _initModules();
            _initEvents();
        },
        
        _initModules = function() {
            controlsView = DataManagement.ControlsView.init();
            addDriver = DataManagement.AddDriver.init();
            dbController = DataManagement.DBController.init();
            //dataControl = DataFetcher.DataControl.init();
            //resultView = DataFetcher.ResultView.init();
        },
        
        _initEvents = function() {
            var $body = $('body');
            $body.on('insertIntoDB', _onInsertIntoDB);
            $body.on('requestLocations', _onRequestLocations);
        },
        
        _onInsertIntoDB = function(event, data) {
            switch (data.type) {
                case "driver":
                    dbController.insertDriver(data.values);
            }
        },
        
        _onRequestLocations = function(event) {
            dbController.getLocations();   
        };
    
    that.init = init;
    
    return that;
})();
        