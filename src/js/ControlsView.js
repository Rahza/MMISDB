DataManagement.ControlsView = (function() {
    var that = {},
        $user_select,
        $task_select,
        $tasks_manager,
        $tasks_driver,
        $tasks,
        
        init = function() {            
            _initUI();
            _initEvents();
            
            return that;
        },
        
        _initUI = function() {
            $user_select = $('#user-select');
            $task_select = $('#task-select');
            
            $tasks_manager = $('#tasks-manager');;
            $tasks_driver = $('#tasks-driver');;
            
            $tasks = $('#task');
            
            $task_select.hide();
            $task_select.children("div").hide();
            $tasks.hide();
            $tasks.children("div").hide();
        },
        
        _initEvents = function() {
            $user_select.on('click', _onSelectUser);
            $task_select.on('click', _onSelectTask);
        },
        
        _onSelectUser = function(event) { 
            $tasks.hide();
            $task_select.children("div").hide();
            $user_select.find(".select").removeClass("selected");
            $task_select.find(".select").removeClass("selected");
            $("#" + event.target.id).addClass("selected");
            $task_select.show();
            
            switch (event.target.id) {
                case "select-manager":
                    $tasks_manager.show();
                    break;
                case "select-driver":
                    $tasks_driver.show();
                    break;
            }
        },
        
        _onSelectTask = function(event) {
            $tasks.trigger('requestLocations');
            
            $tasks.children("div").hide();
            $task_select.find(".select").removeClass("selected");
            $("#" + event.target.id).addClass("selected");
            $tasks.show();
            
            var target = event.target.id.split('-')[3] + "-" + event.target.id.split('-')[4];
            var $task = $("#" + target);
            $task.show();
        },
        
        setLocations = function(data) {
            
        };
    
    that.setLocations = setLocations;
    that.init = init;
    
    return that;
})();
        