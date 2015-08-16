<?php
    include("connect.php");

    $firstname = $_GET['firstname'];
    $lastname = $_GET['lastname'];

    mysqli_select_db($con, $dbname);

    $sql = "INSERT INTO fahrer (vorname, nachname) VALUES ('" . $firstname . "', '" . $lastname . "');";

    if (mysqli_query($con, $sql)) {
        echo "success";
    } else {
        echo "error: " . mysqli_error($con);
    }

    mysqli_close($con);
?>