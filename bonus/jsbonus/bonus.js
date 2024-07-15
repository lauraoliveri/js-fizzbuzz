
    // creo il container per l'html
    let Container = document.createElement('div');

for (let i = 1; i <= 100; i++) {

    let j = 1;

    // inserisco elemento all'interno
    Container.innerHTML = j * 100;

    // stampo fizzbuzz per i multipli sia di 3 che di 5
    
    if (j % 3 == 0 && j % 5 == 0) {
        Container.innerHTML = ('fizzbuzz');
    }

    // stampo fizz per i multipli di 3 

    else if (j % 3 == 0) {
        Container.innerHTML = ('fizz');
    }

    // stampo buzz per i multipli di 5

    else if (j % 5 == 0) {
        Container.innerHTML = ('buzz');
    }
    
    else {
        Container.innerHTML = (j);
    }
    
    
}
