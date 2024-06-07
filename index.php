<!doctype html>
<html lang="ru">
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
    $i = 0;
    do{
        if($i == 0){
            echo '0 - это 0.'."<br>";
        }

        if($i % 2 == 0 && $i != 0){
            echo $i.' - это чётное число.'."<br>";
        }

        if($i % 2 != 0){
            echo $i.' - это нечётное число.'."<br>";
        }
        $i++;
    }while($i < 11);

    echo "<h2>Пункт 2</h2>";
    $ranges = array(
            "Московская область" => array("Москва", "Зеленоград", "Клин"),
            "Ленинградская область" => array("Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"),
            "Рязанская область" => array("Рязань", "Касимов", "Кораблино", "Спасск-Рязанский", "Скопин")
    );

    foreach ($ranges as $key => $values)
    {
        echo $key. ':'."<br>";
        for($i = 0; $i < count($values) - 1; $i++){
            echo $values[$i].', ';
        }
        echo $values[count($values) - 1].'.'."<br>";
    }
    echo "<h3>Пункт 3</h3>";
    $dictionary = [
        'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'yo',
        'ж' => 'zh', 'з' => 'z', 'и' => 'i', 'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm',
        'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u',
        'ф' => 'f', 'х' => 'kh', 'ц' => 'ts', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 'ъ' => '',
        'ы' => 'y', 'ь' => '', 'э' => 'e', 'ю' => 'yu', 'я' => 'ya'
    ];
    $sentence = 'русские предложения';
    $new_sentence = '';
    function translate($words, $dictionary, $new_sentence)
    {
        $word = explode(' ', $words);
        for ($j = 0; $j < count($word); $j++){
            $current_word = $word[$j];
            for ($i = 0; $i < strlen($current_word); $i++) {
                $symbol = mb_substr($current_word, $i, 1);
                foreach ($dictionary as $key => $value) {
                    if($symbol == $key) {
                        $new_sentence .= $value;
                    }
                }
            }
            $new_sentence .= ' ';
        }
        return $new_sentence;
    }

    echo translate($sentence, $dictionary, $new_sentence);
    echo "<h4> Пункт 4-5</h4>";
    $menu =  [
        [
            'title' => 'Машина',
            'link' => 'car',
            'children' => [[
                'title' => 'Большая машина',
                'link' => 'big-car',
                'children' => [
                    [
                        'title' => 'Маленькая машина',
                        'link' => 'small-car',
                    ]
                ]
            ]],
        ],
        [
            'title' => 'Окно',
            'link' => 'window',
            'children' => [
                [
                    'title' => 'Маленькое окно',
                    'link' => 'small-window',
                ]
            ]
        ],
        [
            'title' => 'Дверь',
            'link' => 'door',
        ]
    ];

    function getMenu($menu)
    {
        $output = '<ul style="list-style-type: square">';
        foreach ($menu as $value) {
            $output .= '<li>';
            $output .= "<a href='{$value['link']}'> {$value['title']} </a>";
            if (isset($value['children'])) {
                $output .= getMenu($value['children']);
            }
            $output .= '</li>';
        }
        $output .= '</ul>';
        return $output;
    }
    echo getMenu($menu);

    echo "<h6> Пункт 6</h6>";

    $ranges = array(
        "Московская область" => array("Москва", "Зеленоград", "Клин"),
        "Ленинградская область" => array("Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"),
        "Рязанская область" => array("Рязань", "Касимов", "Кораблино", "Спасск-Рязанский", "Скопин")
    );

    foreach ($ranges as $key => $values)
    {
        echo $key. ':'."<br>";
        $answer = array();
        for($i = 0; $i < count($values); $i++){
            if(mb_substr($values[$i], 0, 1) == 'К')
                $answer[] = $values[$i];
        }
        echo join(', ', $answer);
        echo '.'."<br>";
    }
?>
</body>
</html>
