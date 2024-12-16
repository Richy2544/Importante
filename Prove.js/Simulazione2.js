const quadrato2 = document.getElementById('quadrato2');
const fotocellula2 = document.getElementById('fotocellula2');
const distanzaSpan2 = document.getElementById('distanza2');
const tempoSpan2 = document.getElementById('tempo2');
const startButton2 = document.getElementById('start2');
const posizioneFotocellulaInput2 = document.getElementById('posizioneFotocellula2');

let posizione2 = 0;
let tempo2 = 0;
let velocita2 = 0;
let accelerazione = 0.1; // Accelerazione costante
let intervallo2;
let cronometro2;

function aggiornaFotocellula2() {
    const distanzaFotocellula2 = parseInt(posizioneFotocellulaInput2.value, 10);
    fotocellula2.style.left = distanzaFotocellula2 + 'px';
}

function startAnimazione2() {
    // Disabilita il pulsante "Inizia" durante l'animazione
    startButton2.disabled = true;

    posizione2 = 0;
    velocita2 = 0;
    tempo2 = 0;
    quadrato2.style.left = '0px';
    distanzaSpan2.textContent = '0';
    tempoSpan2.textContent = '0.00';

    aggiornaFotocellula2();

    const distanzaFotocellula2 = parseInt(posizioneFotocellulaInput2.value, 10);

    cronometro2 = setInterval(() => {
        tempo2 += 0.01;
        tempoSpan2.textContent = tempo2.toFixed(2);
    }, 10);

    intervallo2 = setInterval(() => {
        velocita2 += accelerazione; // Incrementa la velocità (accelerazione costante)
        posizione2 += velocita2;
        quadrato2.style.left = posizione2 + 'px';
        distanzaSpan2.textContent = Math.round(posizione2);

        if (posizione2 >= distanzaFotocellula2) {
            clearInterval(intervallo2);
            clearInterval(cronometro2);
            startButton2.disabled = false; // Riabilita il pulsante alla fine dell'animazione
        }
    }, 10);
}

posizioneFotocellulaInput2.addEventListener('input', aggiornaFotocellula2);
startButton2.addEventListener('click', startAnimazione2);
