<?php 


    // se è presente un valore di newTodo nell'array POST 
    if(isset($_POST['newTodo'])){

        // prendo il contenuto del file JSON e lo inserisco in una variabile
        $todoJSON = file_get_contents('todos.json');

        // creo un array PHP con all'interno la variabile JSON convertita in array PHP
        $todos = json_decode($todoJSON);

        // ci pusho il nuovo todo con assegnati i valori 
        $todos[] = [
            "text" => $_POST['newTodo'],
            "done" => false,
        ];

        // riconverto l'array PHP con la modifica in una stringa JSON 
        $newTodoJSON = json_encode($todos);

        // e reinserisco la stringa JSON ottenuta nel file JSON
        file_put_contents('todos.json',$newTodoJSON);

    }else{

        
        // prendo l'array dal file JSON e la rasformo da stringa formato JSON ad array PHP
        $todos = json_decode(file_get_contents('todos.json'));
        
        
        // visualizzo il contenuto della pagina come se fosse un file JSON
        header('Content-type: application/json');
        
        // stampo in pagina l'array in formato JSON
        echo json_encode($todos);
    }