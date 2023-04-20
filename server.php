<?php 

    
    // prendo l'array dal file JSON e la rasformo da stringa formato JSON ad array PHP
    $todos = json_decode(file_get_contents('todos.json'));


    // visualizzo il contenuto della pagina come se fosse un file JSON
    header('Content-type: application/json');

    // stampo in pagina l'array in formato JSON
    echo json_encode($todos);