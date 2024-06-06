<?php
    $title = 'Крутой Title';
    $h1 = 'Test';
    $year = date('Y');

    function get_declension($value, $words)
    {
        $num = $value % 100;
        if ($num > 19) {
            $num = $num % 10;
        }

        $result = $value . ' ';
        switch ($num) {
            case 1:  $result .= $words[0]; break;
            case 2:
            case 3:
            case 4:  $result .= $words[1]; break;
            default: $result .= $words[2]; break;
        }

        return $result;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $title ?></title>
</head>
<body>
    <h1><?php echo $h1 ?></h1>
    <h1><?php echo $year ?></h1>
    <span>
        <?php
            echo get_declension(date('h'), array('час', 'часа', 'часов'));
        ?>
        <?php
            echo get_declension(date('i'), array('минута', 'минуты', 'минут'));
        ?>
    </span>
</body>
</html>
