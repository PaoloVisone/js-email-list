// Seleziono gli elementi html
const email = document.getElementById('list-email');

// API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// Variabile d'appoggio
let iteam = "";

// Ciclo X 10
for (let i = 0; i <= 10; i++) {

    // Chiamata asincrona
    axios.get(endpoint)
        .then(function (response) {

            const result = response.data.response;
            // iteam.push(`<li>${result}</li>`);
            // console.log(iteam);
            email.innerHTML += `<li>${result}</li>`
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
