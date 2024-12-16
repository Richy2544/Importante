const quadrato = document.getElementById('quadrato');
const fotocellula = document.getElementById('fotocellula');
const distanzaSpan = document.getElementById('distanza');
const tempoSpan = document.getElementById('tempo');
const startButton = document.getElementById('start');
const posizioneFotocellulaInput = document.getElementById('posizioneFotocellula');

const movimento = () => {
    
}

let posizione = 0; // Posizione iniziale del quadrato
let intervallo; // Per gestire l'animazione
let tempo = 0; // Tempo trascorso
let cronometro; // Per il timer

function aggiornaFotocellula() {
    const distanzaFotocellula = parseInt(posizioneFotocellulaInput.value, 10);
    fotocellula.style.left = distanzaFotocellula + 'px';
}

function startAnimazione() {
    posizione = 0;
    tempo = 0;
    quadrato.style.left = '0px';
    distanzaSpan.textContent = '0';
    tempoSpan.textContent = '0.00';

    // Posiziona la fotocellula prima di avviare l'animazione
    aggiornaFotocellula();

    const distanzaFotocellula = parseInt(posizioneFotocellulaInput.value, 10);

    // Avvia il cronometro
    cronometro = setInterval(() => {
        tempo += 0.01;
        tempoSpan.textContent = tempo.toFixed(2);
    }, 10);

    // Avvia l'animazione
    intervallo = setInterval(() => {
        posizione += 2; // Incremento posizione
        quadrato.style.left = posizione + 'px';
        distanzaSpan.textContent = posizione;

        // Controlla se il quadrato raggiunge la fotocellula
        if (posizione >= distanzaFotocellula) {
            clearInterval(intervallo); // Ferma l'animazione
            clearInterval(cronometro); // Ferma il cronometro
        }
    }, 10);
}

// Aggiorna la posizione della fotocellula in tempo reale
posizioneFotocellulaInput.addEventListener('input', aggiornaFotocellula);

// Avvia l'animazione al clic del pulsante
startButton.addEventListener('click', startAnimazione);