

const { createApp } = Vue;

createApp({

  data() {

    return {
        
        todos: [],


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
    }

  },

  mounted() {
    
    this.getTodos();
  },



}).mount('#app')