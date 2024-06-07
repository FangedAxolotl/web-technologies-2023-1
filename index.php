<?php include 'realization.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Галлерея</title>
</head>
<body>
<h1>Галерея фотографий</h1>
<form name="upload-photo" action="upload.php" method="post" enctype="multipart/form-data">
    <input type="submit" name="submitPhoto" id="submit" class="submit" style="display: none"/>
    <label class="input-file">
        <input type="file" name="uploadPhoto" id="uploadPhoto" onchange="document.getElementById('submit').click()"/>
    </label>
</form>
<?php
    logQuery();
    buildGallery("./images/");
?>
</body>
</html>