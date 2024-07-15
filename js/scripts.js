// stampa in console i numeri da 1 a 100

// dichiaro la variabile

let i = 1
for (let i = 1; i <= 100; i++) {
 
    // stampo fizzbuzz per i multipli sia di 3 che di 5

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
    }

    // stampo fizz per i multipli di 3 

    else if (i % 3 == 0) {
        console.log('fizz');
    }

    // stampo buzz per i multipli di 5

    else if (i % 5 == 0) {
        console.log('buzz');
    }
    
    else {
        console.log(i);
    }

}



