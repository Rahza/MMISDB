<?php
    include("connect.php");

    mysqli_select_db($con, $dbname);

    $sql = "SELECT * FROM adresse;";
    $result = mysqli_query($con, $sql);

    echo $result;

    mysqli_close($con);
?>