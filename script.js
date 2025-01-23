// Seleziono gli elementi html
const email = document.getElementById('list-email');

// API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// Chiamata asincrona
axios.get(endpoint)
    .then(function (response) {
        const result = response.data.response;
        console.log(result);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
