

const { createApp } = Vue;

createApp({

  data() {

    return {
        
        todos: [],
        newTodo: "",


    }
  },

  methods: {

    // funzione che richiama i todos da visualizzare
    getTodos(){

        // chiamata axios (API) al file server.php
        axios.get('./server.php').then(res =>{

            // imposto l'array di todos uguale alla risposta API
            this.todos = res.data;
        })
    },

    // funzione che aggiunge un todo alla lista
    addTodo(){
        

        // creao una variabile in cui dichiarare le variabili e i dati da inviare
        let data = {

            newTodo:'',
        };

        // attribuisco il valore dell'input alla variabile da mandare al server PHP
        data.newTodo = this.newTodo;


        // eseguo la chiamata di invio dei dati al server PHP
        axios.post('./server.php', data, {headers: {'Content-Type':'multipart/form-data'}}).then(res =>{

            // eseguo la funzione che richiama i todos da visualizzare
            this.getTodos();

        });

        this.newTodo = "";
        
        
    },

    // funzione che toggla lo stile del todo in base a se è già stato fatto o meno
    toggleDoneTodo(text){

        // creao una variabile in cui dichiarare le variabili e i dati da inviare
        let data = {

            todoToModify:'',
        };

        // attribuisco il valore dell'input alla variabile da mandare al server PHP
        data.todoToModify = text;


        // eseguo la chiamata di invio dei dati al server PHP
        axios.post('./server.php', data, {headers: {'Content-Type':'multipart/form-data'}}).then(res =>{

            // eseguo la funzione che richiama i todos da visualizzare
            this.getTodos();

        });


    },

    deleteTodo(index){

        // creao una variabile in cui dichiarare le variabili e i dati da inviare
        let data = {

            todoToDelete:'',
        };

        // attribuisco il valore dell'input alla variabile da mandare al server PHP
        data.todoToDelete = index;


        // eseguo la chiamata di invio dei dati al server PHP
        axios.post('./server.php', data, {headers: {'Content-Type':'multipart/form-data'}}).then(res =>{

            // eseguo la funzione che richiama i todos da visualizzare
            this.getTodos();

        });

    }

  },

  mounted() {

    this.getTodos();
  },



}).mount('#app')