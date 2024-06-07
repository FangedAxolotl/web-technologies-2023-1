<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    echo "<h1>Пункт 1</h1>";
    $a = 12;
    $b = 10;
    if($a >= 0 && $b >= 0){
        echo $a - $b;
    }elseif ($a < 0 && $b < 0){
        echo $a * $b;
    }elseif (($a < 0 && $b >= 0) || ($a >= 0 && $b < 0)) {
        echo $a + $b;
    }

    echo "<h2>Пункт 2</h2>";
    $a = rand(0, 15);
    switch ($a){
        case 0: echo 0;
            break;
        case 1: echo 1;
            break;
        case 2: echo 2;
            break;
        case 3: echo 3;
            break;
        case 4: echo 4;
            break;
        case 5: echo 5;
            break;
        case 6: echo 6;
            break;
        case 7: echo 7;
            break;
        case 8: echo 8;
            break;
        case 9: echo 9;
            break;
        case 10: echo 10;
            break;
        case 11: echo 11;
            break;
        case 12: echo 12;
            break;
        case 13: echo 13;
            break;
        case 14: echo 14;
            break;
        case 15: echo 15;
            break;
        default: echo "Такого числа в промежутке нет!";
    }

    echo "<h3>Пункт 3</h3>";
    function sum($a, $b){
        return $a + $b;
    }

    function subtract($a, $b){
        return $a - $b;
    }

    function multiply($a, $b){
        return $a * $b;
    }

    function divide($a, $b){
        return $a / $b;
    }

    echo sum(2, 3);

    echo "<h4> Пункт 4</h4>";
    function mathOperation($arg1, $arg2, $operation){
        switch ($operation){
            case 'Sum': return sum($arg1, $arg2);
            case 'Subtract': return subtract($arg1, $arg2);
            case 'Multiply': return multiply($arg1, $arg2);
            case 'Divide': return divide($arg1, $arg2);
            default:
                return "Operation is not exists!";
        }
    }

    echo mathOperation(1, 2,'Sum')."<br>";
    echo mathOperation(1, 2,'Subtract')."<br>";
    echo mathOperation(1, 2,'Multiply')."<br>";
    echo mathOperation(1, 2,'Divide')."<br>";

    echo "<h5> Пункт 5</h5>";
    //1
    echo date("Y ");
    //2
    $example = new DateTime();
    echo $example->format('Y ') ;
    //3
    echo getdate( time() )['year'];
    echo "<h6> Пункт 6</h6>";
    function power($val, $pow){
        if($pow == 0){
            return 1;
        }

        if ($pow == 1){
            return $val;
        }
        return $val * power($val, $pow-1);
    }

    echo power(2, 6);
?>
</body>
</html>
