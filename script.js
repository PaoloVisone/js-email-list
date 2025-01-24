// Seleziono gli elementi html
const email = document.getElementById('list-email');
const btn = document.getElementById('btn');

// API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// Evento al click del bottone
btn.addEventListener('click', () => {

    // Creo un array per salvare gli elementi
    let arrMail = [];

    // Inizializzo l'elemento html vuoto
    email.innerHTML = "";

    // Ciclo X 10
    for (let i = 0; i <= 10; i++) {

        // Chiamata asincrona
        axios.get(endpoint)
            .then(function (response) {
                // Aquisizione dell'elemento 
                const result = response.data.response;

                // Push degli elementi per salvarli in un array
                arrMail.push(result);
                // console.log(result);

                // Inserimeto con template literals
                email.innerHTML += `<li>${result}</li>`
            })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })
    }
})
