// creazione pagina di partenza con tutte le icone in pagina

// per ogni elemento dell'array di icone
listaIcone.forEach(icona => {

    // creo la struttura html in modo che l'icona venga mostrata in pagina
    document.getElementById("contenitore-icone").innerHTML += 
        `<div class="oggetto">
            <div class="contenuti">
                <i class="${icona.family} ${icona.prefix}${icona.name} ${icona.color}"></i>
                <div class="nome-icona">${icona.name}</div>
            </div>
        </div>`;
});