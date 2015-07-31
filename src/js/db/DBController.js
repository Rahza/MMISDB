DataManagement.DBController = (function() {
    var that = {},
        
        init = function() {  
            
            
            return that;
        },
        
        insertDriver = function(data) {
            var first_name = data.first_name;
            var last_name = data.last_name;
            
            var xmlhttp = new XMLHttpRequest();
            
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById("db_result").innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.open("GET","src/script/insert_driver.php?firstname=" + first_name + "&lastname=" + last_name, true);
            xmlhttp.send();
        };
    
    that.insertDriver = insertDriver;
    that.init = init;
    
    return that;
})();
        