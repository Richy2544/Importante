const quadrato1 = document.getElementById('quadrato1');
const fotocellula1 = document.getElementById('fotocellula1');
const distanzaSpan1 = document.getElementById('distanza1');
const tempoSpan1 = document.getElementById('tempo1');
const startButton1 = document.getElementById('start1');
const posizioneFotocellulaInput1 = document.getElementById('posizioneFotocellula1');

let posizione1 = 0;
let tempo1 = 0;
let intervallo1;
let cronometro1;

function aggiornaFotocellula1() {
    const distanzaFotocellula1 = parseInt(posizioneFotocellulaInput1.value, 10);
    fotocellula1.style.left = distanzaFotocellula1 + 'px';
}

function startAnimazione1() {
    // Disabilita il pulsante "Inizia" durante l'animazione
    startButton1.disabled = true;

    posizione1 = 0;
    tempo1 = 0;
    quadrato1.style.left = '0px';
    distanzaSpan1.textContent = '0';
    tempoSpan1.textContent = '0.00';

    aggiornaFotocellula1();

    const distanzaFotocellula1 = parseInt(posizioneFotocellulaInput1.value, 10);

    cronometro1 = setInterval(() => {
        tempo1 += 0.01;
        tempoSpan1.textContent = tempo1.toFixed(2);
    }, 10);

    intervallo1 = setInterval(() => {
        posizione1 += 2;
        quadrato1.style.left = posizione1 + 'px';
        distanzaSpan1.textContent = posizione1;

        if (posizione1 >= distanzaFotocellula1) {
            clearInterval(intervallo1);
            clearInterval(cronometro1);
            startButton1.disabled = false; // Riabilita il pulsante alla fine dell'animazione
        }
    }, 10);
}

posizioneFotocellulaInput1.addEventListener('input', aggiornaFotocellula1);
startButton1.addEventListener('click', startAnimazione1);
