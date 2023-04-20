<?php 


    $todos = [

        [
            "text" => "Fare l'esercizio di oggi",
            "done" => false,
        ],
        [
            "text" => "Preparare il pranzo",
            "done" => false,
        ],
        [
            "text" => "Guardare la tv",
            "done" => false,
        ],
        [
            "text" => "Lavare i piatti",
            "done" => false,
        ],
        [
            "text" => "Stendere il bucato",
            "done" => false,
        ],
        [
            "text" => "Lavare la macchina",
            "done" => false,
        ],
        [
            "text" => "Andare al supermercato",
            "done" => false,
        ],
        [
            "text" => "Accarezzare il cane",
            "done" => false,
        ],
        [
            "text" => "Dormire un'oretta",
            "done" => false,
        ],
        [
            "text" => "Fare merenda",
            "done" => false,
        ],

    ];


    // visualizzo il contenuto della pagina come se fosse un file JSON
    header('Content-type: application/json');

    // stampo in pagina l'array in formato JSON
    echo json_encode($todos);