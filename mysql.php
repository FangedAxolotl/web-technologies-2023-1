<?php
    function doSQLQuery($query) {
        $db_password = ".BQmPSwl_u7eyspq";
        $db_username = "webnc";
        $db_host = "localhost";
        $db_name = "webnc";

        $db_con = new mysqli($db_host, $db_username, $db_password, $db_name);

        if ($db_con -> connect_error) {
            die("Connection Failed: " . $db_con -> connect_error);
        }

        $result = $db_con -> query($query);

        if ($result -> num_rows > 0) {
            while ($row = $result -> fetch_assoc()) {
                yield $row;
            }
        }
        else {
            yield;
        }
    }
?>