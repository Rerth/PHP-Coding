<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo</title>
</head>
<body>
    
<?php
   
    $books = [
        [

        'name' => ' Do Andriod Dream of Electric Sheep',
        'author' => ' Phillip ',
        'purchaseurl' => ' http://example.com ' 

    ],
    [

        'name' => ' Dream of Electric Sheep',
        'author' => ' PhillipJose ',
        'purchaseurl' => ' http://example.com ' 

    ],
];


?>


<ul>
    <?php foreach ($books as $book) : ?>
        <li>
            <a href="<?= $book['purchaseurl'] ?>">
                <?= $book['name'];  ?>
            </a>
        </li>
    <?php endforeach; ?>
</ul>
    
</body>
</html>