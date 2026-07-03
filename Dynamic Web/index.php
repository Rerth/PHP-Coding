<?php

$heading = 'Welcome to Dynamic Web';

function dd($value) {
    echo '<pre>';
    var_dump($value);
    echo '</pre>';
    die();
}

echo $_SERVER['REQUEST_URI'];

?>

<?php require "views/index.views.php";