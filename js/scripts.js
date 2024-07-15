// stampa in console i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
console.log(i);
}

// stampo fizz per i multipli di 3 

if (i % 3 == 0) {
    console.log('fizz')
}

// stampo buzz per i multipli di 5

else if (i % 5 == 0) {
    console.log('Buzz')
}

// stampo fizzbuzz per i multipli sia di 3 che di 5

else if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log('fizzbuzz')
}

