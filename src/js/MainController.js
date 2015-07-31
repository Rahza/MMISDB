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
            //$body.on('fetchingFinished', _onFetchingFinished);
            //$body.on('loadComplete', _onLoadComplete);
        },
        
        _onInsertIntoDB = function(event, data) {
            switch (data.type) {
                case "driver":
                    dbController.insertDriver(data.values);
            }
        };
    
    that.init = init;
    
    return that;
})();
        