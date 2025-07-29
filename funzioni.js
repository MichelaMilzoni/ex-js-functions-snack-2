//*Crea una funzione che somma due numeri.
//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma (a, b) {
    return a+b;
}
// console.log(somma(4,6));


//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const somma1 = function (a, b) {
    return a+b
}
// console.log(somma1(3,5));

//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const somma2 = (a,b) => a+b;
// console.log(somma2(7,3));

 


//*Crea una arrow function che calcola il quadrato di un numero.
//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
const quadrato = n => n**2;
// console.log(quadrato(2));

//!-------------------------
const quadrato2 = n => n*n;
// console.log(quadrato2(3));



//*Crea una funzione eseguiOperazione
//Definisci una funzione eseguiOperazione che accetta tre parametri: 
// due numeri e una funzione operatore (callback). 
// La funzione deve eseguire l'operazione fornita sui due numeri.
function eseguiOperazione (a, b, callback) {
    return callback(a,b);
};
// console.log(eseguiOperazione(5,6, somma));
// console.log(eseguiOperazione(5,6, somma1));
// console.log(eseguiOperazione(5,6, somma2));

//*Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) 
// e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(ms) {
    return (() => {
        setTimeout (() => {
            console.log('Tempo scaduto');            
        }, ms);
  }); 
};

//# x avviare il timer quando voglio 
const timer = creaTimer(5000);
// timer()
//# x avviare il timer subito
// creaTimer(5000)();


//*Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
//!Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
// creo funzione, gli passo un messaggio che avvia setInterval
const msTimeout = 10*1000;
const msInterval = 1*1000;
let id;

function stampaOgniSecondo (messaggio) {
   return id = setInterval(() => {
        console.log(messaggio);
        
    }, msInterval)
};

setTimeout (() => {
    clearInterval(id);
    // console.log('setInteval fermato a 10 secondi');
}, msTimeout)

// stampaOgniSecondo('stampo ogni secondo');

//*Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo 
// e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico (intervallo) {
    let contatore = 0;
    return function () {
        
        id = setInterval(() => {
            contatore++;
            console.log(contatore);
        }, msInterval)
    }
}

setTimeout (() => {
    clearInterval(id);
    // console.log('setInterval fermato a 10 secondi');
}, msTimeout);

const avvia = creaContatoreAutomatico(msInterval);
// avvia();



//* Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.
// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma (message, start, stop) {

    // Avvio il timer dopo 'start' millisecondi
    setTimeout(() => {
        const id = setInterval (() => {
            console.log(message);
        }, msInterval);

        // fermo il timer dopo 'stop' millisecondi
        setTimeout (() => {
            clearInterval(id);
            console.log(`timer fermato dopo ${stop} millisecondi`);
        }, stop)
    }, start)
}

// eseguiEferma('stampo ogni secondo', 1000, 10000);




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

// function contoAllaRovescia(n) {
//     const id = setInterval(() => {
//         if (n > 0) {
//             console.log(n);
//             n--;
//         } else {
//             console.log("Tempo scaduto!");
//             clearInterval(id);
//         }
//     }, 1000);
// }

// contoAllaRovescia(10);


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

const operazioni = [
 op1 = () => console.log("somma"),
 op2 = () => console.log("moltiplica"),
 op3 = () => console.log("dividi")
]

// sequenzaOperazioni(operazioni, 1000);
//-------------------------------------------------

function sequenzaOperazioni(operazioni, intervallo) {
    let i = 0;
    const timer = setInterval(() => {
        operazioni[i](); // esegue l'operazione corrente
        i++;
        if (i >= operazioni.length) {
            clearInterval(timer); // ferma l'intervallo quando finisce
        }
    }, intervallo);
}



//*Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// Restituisce una nuova funzione che, quando chiamata ripetutamente, 
// esegue l'operazione originale al massimo una volta ogni n millisecondi.
// function creaThrottler(fn, limite) {
//     let ultimoEseguito = 0;

//     return function (...args) {
//         const ora = Date.now();

//         if (ora - ultimoEseguito >= limite) {
//             ultimoEseguito = ora;
//             fn(...args);
//         }
//     };
// }

// const stampaMessaggio = () => console.log("Funzione eseguita!");

// const throttled = creaThrottler(stampaMessaggio, 2000);
