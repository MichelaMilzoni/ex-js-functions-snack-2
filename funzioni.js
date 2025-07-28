//*Crea una funzione che somma due numeri.
//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(a,b) {
    return a+b
} 
console.log(somma(2,3));

//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const somma1 = function (a, b) {
    return a+b
}
console.log(somma1(3,5));

//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const somma2 = (a,b) => a+b;
console.log(somma2(5,5));
 


//*Crea una arrow function che calcola il quadrato di un numero.
//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
const quadrato = (n) => n*n;
console.log(quadrato(5));


//*Crea una funzione eseguiOperazione
//Definisci una funzione eseguiOperazione che accetta tre parametri: 
// due numeri e una funzione operatore (callback). 
// La funzione deve eseguire l'operazione fornita sui due numeri.
function eseguiOperazione(a,b,operazione) {
    return operazione(a,b);
}

const moltiplica = (a,b) => a*b;
const dividi = (a,b) => a/b;

console.log(eseguiOperazione(5,2, moltiplica));
console.log(eseguiOperazione(6,2, dividi));


//*Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) 
// e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(ms) {
    return function() {
        setTimeout(() => {
            console.log('tempo scaduto!');
        }, ms); 
    };
};

const timer = creaTimer(5000);
timer();



//*Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
//!Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
// creo funzione, gli passo un messaggio che avvia setInterval
function stampaOgniSecondo(messaggio) {
    return setInterval(() => {
        console.log(messaggio);
    }, 1000)
};

const id = stampaOgniSecondo('è passato un secondo');

setTimeout (() => {
    clearInterval(id);
    console.log('timer fermato');
}, 4000);

//*Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo 
// e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
function creaContatoreAutomatico(intervallo) {
    let contatore= 0;

    return function avviaContatore() {
        const id2 = setInterval(() => {
            contatore++;
            console.log(contatore);        
        }, intervallo);

        return id2;
    }
}

const avvia = creaContatoreAutomatico(1000);
const id2 = avvia();

setTimeout(() => {
    clearInterval(id2);
    console.log('ho fermato il timer');
}, 6000)

//*Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0,
// con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
//# Output atteso:
//# 5
//# 4
//# 3
//# 2
//# 1
//# Tempo scaduto!

function contoAllaRovescia(n) {
    let contatore = n;

    const id = setInterval(() => {
        if (contatore > 0) {
            console.log(contatore);
            contatore--;
        } else {
            console.log("Tempo scaduto!");
            clearInterval(id);
        }
    }, 1000);
}



//*Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
//# Output atteso:
//# Operazione 1
//# Operazione 2
//# Operazione 3
function sequenzaOperazioni(operazioni, intervallo) {
    operazioni.forEach((operazione, i) => {
        setTimeout(() => {
            operazione();
        }, intervallo*i)
    });
}

const op1 = () => console.log("Operazione 1");
const op2 = () => console.log("Operazione 2");
const op3 = () => console.log("Operazione 3");

sequenzaOperazioni([op1, op2, op3], 1000);


//*Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// Restituisce una nuova funzione che, quando chiamata ripetutamente, 
// esegue l'operazione originale al massimo una volta ogni n millisecondi.
function creaThrottler(fn, limite) {
    let ultimoEseguito = 0;

    return function (...args) {
        const ora = Date.now();

        if (ora - ultimoEseguito >= limite) {
            ultimoEseguito = ora;
            fn(...args);
        }
    };
}

const stampaMessaggio = () => console.log("Funzione eseguita!");

const throttled = creaThrottler(stampaMessaggio, 2000);

// Simulazione di chiamate ripetute
setInterval(() => {
    throttled(); // verrà eseguita al massimo una volta ogni 2 secondi
}, 2000);