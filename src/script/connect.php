<?php 
    $con = mysqli_connect('mysql5.chatting-world.de','db73236_7','ZGxsBhd4ee?e','db73236_7');
    $dbname = "kurier";
    
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
?>