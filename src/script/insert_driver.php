<?php
    include("connect.php");

    $firstname = $_GET['firstname'];
    $lastname = $_GET['lastname'];

    mysqli_select_db($con, "kurier");

    $sql = "INSERT INTO fahrer (vorname, nachname) VALUES (" + $firstname + ", " + $lastname + ");";

    $result = mysqli_query($con, $sql);

    echo "success";

    mysqli_close($con);
?>