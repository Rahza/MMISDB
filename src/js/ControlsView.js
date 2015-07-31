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
            $task_select.children("div").hide();
            $task_select.show();
            
            switch (event.target.id) {
                case "select-manager":
                    $tasks_manager.show();
                    break;
                case "select-driver":
                    $tasks_driver.show();
                    break;
            }
            
            /*
            var char = $char.val();
            $controls.trigger('requestData', {
                char: char,
                realm: realm
            });
            */
        },
        
        _onSelectTask = function(event) {
            $tasks.children("div").hide();
            $tasks.show();
            
            var target = event.target.id.split('-')[3] + "-" + event.target.id.split('-')[4];
            var $task = $("#" + target);
            $task.show();
        };
    
    that.init = init;
    
    return that;
})();
        