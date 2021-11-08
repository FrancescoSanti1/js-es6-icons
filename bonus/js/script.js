// creazione pagina di partenza con tutte le icone in pagina
creazionePagina(listaAnimali);


// quando cambia il valore selezionato nel menù a tendina
document.getElementById("tipo-icone").addEventListener("input", function() {

    // se il valore selezionato è "all"
    if (this.value === "all") {

        // ricreo la pagina di partenza
        creazionePagina(listaAnimali);
    } else {

        // altrimenti creo un nuovo array con solo gli elementi che hanno il "tipo" selezionato dall'utente
        const listaTipoSelezionato = listaAnimali.filter(elemento => elemento.type === this.value);

        // e stampo in pagina solo gli elementi che rientrano nel tipo selezionato
        creazionePagina(listaTipoSelezionato);
    }
    
});

// funzione che stampa in pagina gli elementi dell'array passato come argomento della funzione
function creazionePagina(lista) {

    // elimino tutte le icone presenti in pagina
    document.getElementById("contenitore-icone").innerHTML = "";

    // stampo in pagina la struttura html con i valori delle proprietà dell'array passato come argomento
    lista.forEach(icona => {

        // creo la struttura html in modo che l'icona venga mostrata in pagina
        document.getElementById("contenitore-icone").innerHTML += 
            `<div class="oggetto">
                <div class="contenuti">
                    <i class="${icona.family} ${icona.prefix}${icona.name} ${icona.color}"></i>
                    <div class="nome-icona">${icona.name}</div>
                </div>
            </div>`;
    });
}