
// creo il container per l'html
const Container =  document.createElement('div');

// creo l'elemento da inserire nel container
const Element =
// aggiungo l'elemento al tag
Container.append(i);

let i = 1

for (let i = 1; i <= 100; i++) {

    // stampo fizzbuzz per i multipli sia di 3 che di 5

    if (i % 3 == 0 && i % 5 == 0) {
        document.getElementById('div').innerHTML = ('fizzbuzz');
    }

    // stampo fizz per i multipli di 3 

    else if (i % 3 == 0) {
        document.getElementById('div').innerHTML = ('fizz');
    }

    // stampo buzz per i multipli di 5

    else if (i % 5 == 0) {
        document.getElementById('div').innerHTML = ('buzz');
    }
    
    else {
        document.getElementById('div').innerHTML = (i);
    }

}
