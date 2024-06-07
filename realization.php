<?php
function buildGallery($path) {
    transformToMiniatures($path);
    echo '<div class=\'gallery\'>';
    $files = array_diff(scandir($path), array('..', '.'));
    $miniature_path = './mini/';
    foreach ($files as $file) {
        echo "<a href=\"$path$file\" target=\"_blank\">";
        echo "<img class=\"images\" src=\"$miniature_path$file\" alt='Фото'/>";
        echo "</a>";
    }
    echo '</div>';
}

function logQuery() {
    $current_time = date("Y-m-d H:i:s");
    $path = './logs/';
    $filename = $path . 'log.txt';
    $text = file_get_contents($filename);
    $handle = fopen($filename, "w");
    if (count(mb_split('\r\n', $text)) > 10) {
        createLogHistoryFile($text, $path);
        $text = '';
    }
    $log_line = "[GALLERY LOAD LOG] The page was refreshed at $current_time.\r\n";
    $text .= $log_line;
    fwrite($handle, $text);
    fclose($handle);
}

function createLogHistoryFile($text, $path) {
    $log_files = array_diff(scandir($path), array('..', '.', 'log.txt'));
    $counter = 0;
    $file_created = false;
    foreach ($log_files as $log_file) {
        $log_number = intval(mb_substr($log_file, 3, strlen($log_file) - 7));
        if ($log_number != $counter) {
            $filename = $path . 'log' . $counter . '.txt';
            if (!file_exists($filename)) {
                file_put_contents($filename, $text);
                $file_created = true;
                break;
            }
        }
        $counter++;
    }
    if (!$file_created) {
        file_put_contents($path . 'log' . $counter . '.txt', $text);
    }
}

function transformToMiniatures($image_path) {
    $images = array_diff(scandir($image_path), array('..', '.'));
    foreach ($images as $img) {
        transformToMiniature($image_path, $img);
    }
}

function transformToMiniature($image_folder_path, $image_path) {
    $img = $image_path;
    $miniature_path = './mini/';
    if (!file_exists($miniature_path . $img)) {
        $extension = pathinfo($img, PATHINFO_EXTENSION );
        if($extension == "png"){
            $smaller_img = imagecreatefrompng($image_folder_path . $img);
            $smaller_img_scale = imagescale($smaller_img, 300);
            imagepng($smaller_img_scale, $miniature_path . $img);
        }elseif($extension == "jpg") {
            $smaller_img = imagecreatefromjpeg($image_folder_path . $img);
            $smaller_img_scale = imagescale($smaller_img, 300);
            imagejpeg($smaller_img_scale, $miniature_path. $img);
        }
    }
}
?>