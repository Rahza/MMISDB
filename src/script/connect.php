<?php 
    $con = mysqli_connect('localhost','peter','abc123','my_db');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }
?>