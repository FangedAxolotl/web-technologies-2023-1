<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web-ИС Лабораторная работа №20</title>
    <link rel="stylesheet" href="./lesson9/style.css" />
</head>
<body>
<?php
    echo "<h1>MYSQL VER</h1>";

    include './catalog_builder.php';
    initCreation();

    echo "<h1>HARDCODE VER</h1>";

    $indexhtml = file_get_contents("./lesson9/index.html");
    $body = mb_substr($indexhtml, strpos($indexhtml, "<body>"));

    // remove </html> tag
    $body = str_replace("</html>", "", $body);

    // update src links
    $body = str_replace("src=\"", "src=\"./lesson9/", $body);

    echo $body;
?>
</body>
</html>