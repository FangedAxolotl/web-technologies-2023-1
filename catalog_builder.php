<?php

    include './mysql.php';

    function initCreation() {
        $all = iterator_to_array(doSQLQuery("SELECT * FROM files"), false);
        if (count($all) <= 0) {
            echo "Ошибка подключения к базе данных.";
            return;
        }
        $root = findChildren(0, $all);

        echo '<div class="list-items" id="list-items-mysql">
        <div class="list-item list-item_open" data-parent>';
        createFolder($root[0]["catalogName"]);
        createList(intval($root[0]["catalogID"]), $all);
        echo '</div></div>';
    }

    function createList($id, $all) {
        $children = findChildren($id, $all);
        if (!is_null($children) && count($children) > 0) {
            foreach ($children as $row) {
                if (is_null($row)) continue;
                $catalogID = intval($row["catalogID"]);
                $parentID = intval($row["parentID"]);
                $name = $row["catalogName"];

                echo '<div class="list-item__items">
                <div class="list-item list-item_open" data-parent>';
                // P.S. изначально я думал, что будут только папки, поэтому и файлы, и каталоги хранятся у меня в одной таблице
                // я решил сделать так, что если у папки нет вложенных элементов, то тогда она файл.
                // (просто переделывать на две таблицы или добавлять лишние столбцы типа "isfile":"true" лень)
                if (count(findChildren($catalogID, $all)) === 0) {
                    createFile($name);
                } else {
                    createFolder($name);
                }
                if (($key = array_search($row, $all)) !== false) {
                    unset($all[$key]);
                }
                createList($catalogID, $all);
                echo "</div></div>";
            }
        }
    }

    function createFolder($foldername) {
        echo <<<EOT
        <div class="list-item__inner">
            <img class="list-item__arrow" src="./lesson9/img/chevron-down.png" alt="chevron-down" data-open>
            <img class="list-item__folder" src="./lesson9/img/folder.png" alt="folder">
            <span>$foldername</span>
        </div>
        EOT;
    }

    function createFile($filename) {
        echo <<<EOT
        <div class="list-item__inner">
            <img class="list-item__file" src="./lesson9/img/file.webp" alt="folder">
            <span>$filename</span>
        </div>
        EOT;
    }

    function findChildren($parentID, $all) {
        $result = [];
        foreach ($all as $row) {
            if (intval($row["parentID"]) == $parentID) {
                array_push($result, $row);
            }
        }
        return $result;
    }
?>