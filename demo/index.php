<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo</title>
</head>
<body>
    <!-- Vairable With Loop PHP -->
<!-- <?php
   
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
            <?= $book['name'] ?> (<?= $book['release'] ?>)            </a>
        </li>
    <?php endforeach; ?>
</ul>  -->

<!-- Function and Filtering PHP -->

<?php
    $books = [
        [
            'name' => 'Do Android Dream of Electric Sheep',
            'author' => 'Phillip',
            'release' => '1968',
            'purchaseurl' => 'http://example.com'
        ],
        [
            'name' => 'Dream of Electric Sheep',
            'author' => 'PhillipJose',
            'release' => '2000',
            'purchaseurl' => 'http://example.com'
        ],
    ];

    function filterbyAuthor($books, $author) {
        $filterBooks = [];

        foreach ($books as $book) {
            if ($book['author'] === $author) {
                $filterBooks[] = $book;
            }
        }
        return $filterBooks;
    }
?>

<ul>
    <?php foreach (filterbyAuthor($books, 'Phillip') as $book) : ?>
        <li>
            <a href="<?= $book['purchaseurl'] ?>">
                <?= $book['name'] ?> (<?= $book['release'] ?>) - By <?= $book['author'] ?>
            </a>
        </li>
    <?php endforeach; ?>
</ul>

  


</body>
</html>