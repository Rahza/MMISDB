DataManagement.MainController = (function() {
    var that = {},
        controlsView = null,
        
        init = function() {
            _initModules();
            _initEvents();
        },
        
        _initModules = function() {
            controlsView = DataManagement.ControlsView.init();
            //dataControl = DataFetcher.DataControl.init();
            //resultView = DataFetcher.ResultView.init();
        },
        
        _initEvents = function() {
            //var $body = $('body');
            //$body.on('requestData', _onDataRequested);
            //$body.on('fetchingFinished', _onFetchingFinished);
            //$body.on('loadComplete', _onLoadComplete);
        };
        
        /*
        _onFetchingFinished = function(event, data) {
            resultView.onFetchingFinished(data.data);
        };*/
    
    that.init = init;
    
    return that;
})();
        