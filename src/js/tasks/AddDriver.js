DataManagement.AddDriver = (function() {
    var that = {},
        $first_name,
        $last_name,
        $address,
        $submit,
        TYPE = "driver",
        
        init = function() {            
            _initUI();
            _initEvents();
            
            return that;
        },
        
        _initUI = function() {
            $first_name = $('#first-name');
            $last_name = $('#last-name');
            $submit = $('#submit');
        },
        
        _initEvents = function() {
            $submit.on('click', _submitForm);
        },
        
        _submitForm = function(event) { 
            var first_name = $first_name.val();
            var last_name = $last_name.val();
            
            $submit.trigger('insertIntoDB', {
                type: TYPE,
                values: {
                    first_name: first_name,
                    last_name: last_name
                }
            });
        };
    
    that.init = init;
    
    return that;
})();
        