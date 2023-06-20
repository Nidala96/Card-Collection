class Carta{
    constructor(nominativo, immagine, cartoneAppartenenza, ruolo, punteggio, descrizione){
        this.nominativo = nominativo;
        this.immagine = immagine;
        this.cartoneAppartenenza = cartoneAppartenenza;
        this.ruolo = ruolo;
        this.punteggio = punteggio;
        this.descrizione = descrizione;
    }


    renderCardRow() {
        const borderStyle = this.cartoneAppartenenza == "One Piece" ? "2px solid gold !important;" : "";
      
        return `<div class="card" style="max-width: 18rem; text-align: center; margin:10px; border: ${borderStyle}">
          <img src="${this.immagine}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.nominativo}</h5>
            <p class="card-text">Anime: ${this.cartoneAppartenenza}</p>
            <p class="card-text">Ruolo: ${this.ruolo}</p>
            <p class="card-text">Forza: ${this.punteggio}</p>
            <a onclick="deleteRow(this)" class="btn btn-primary">Delete</a>
          </div>
          <p class="card-text description">${this.descrizione}</p>
        </div>`;
      }
      
}


const carte = [
    new Carta("Goku","https://www.hallofseries.com/wp-content/uploads/2022/05/Immagine-2022-05-23-101143-930x618.png", "Dragon Ball", "Main Character", "5","Hello, I am Goku!"),
    new Carta("Luffy","https://www.akibagamers.it/wp-content/uploads/2022/08/luffy-one-piece-1620x800.jpg", "One Piece", "Captain", "5","I'm Luffy, the future Pirate King!"),
    new Carta("Naruto","https://i0.wp.com/www.badtaste.it/tv/wp-content/uploads/sites/4/2022/10/naruto-anniversario.jpg?fit=1200%2C600&quality=85&strip=all&ssl=1", "Naruto", "Hokage", "5","Believe it! I'm Naruto Uzumaki!"),
    new Carta("Ichigo","https://upload.wikimedia.org/wikipedia/it/a/a2/Ichigo_Kurosaki.png", "Bleach", "Soul Reaper", "5","I am the substitute Soul Reaper, Ichigo Kurosaki!"),
    new Carta("Pippo Baudo","https://www.movietele.it/wp-content/uploads/2023/06/Pippo-B-sorriso.jpeg", "Pippo", "GOD", "5","I'm Pippo Baudo!"),
    new Carta("Saitama","https://static.nexilia.it/mangaforever/2022/06/saitama-one-punch-man-1.jpg", "One Punch Man", "Hero", "5","I'm Saitama, the strongest hero!"),
    new Carta("Gon Freecss","https://practicaltyping.com/wp-content/uploads/2020/08/gon.png", "Hunter x Hunter", "Hunter", "5","I'm Gon Freecss, on a journey to find my dad!"),
    new Carta("Vegeta","https://upload.wikimedia.org/wikipedia/it/thumb/f/ff/Vegeta_-_Dragon_Ball_Kai.png/800px-Vegeta_-_Dragon_Ball_Kai.png", "Dragon Ball", "Prince of Saiyans", "5","I'm Vegeta, the proud Prince of all Saiyans!")
    
];



function renderizzaTabella(){
    let ris = ``;

    for (const carta of carte) {
        ris += carta.renderCardRow();
    }

    document.getElementById('card-box').innerHTML = ris;
}

renderizzaTabella();

paragrafo();
function onSubmitCarta(event){
    event.preventDefault();

    const form = event.target;

    const inputNome = form.nome;
    const inpuImmagine = form.immagine;
    const inputCartoneAppartenenza = form.cartone;
    const inputRuolo = document.getElementById("ruolo");
    const inputPunteggio = document.getElementById("potenza");
    const inputDescrizione = form.descrizione;

    const newCarta = new Carta(inputNome.value, inpuImmagine.value, inputCartoneAppartenenza.value, inputRuolo.value, inputPunteggio.value, inputDescrizione.value);

    carte.push(newCarta);

    renderizzaTabella();

    form.reset();
    paragrafo();
}


function deleteRow(button) {
    const card = button.closest('.card'); 
    const index = Array.from(card.parentNode.children).indexOf(card); 
    carte.splice(index, 1); 
    card.remove(); 
    renderizzaTabella();
    paragrafo();
  }

  function paragrafo()
{
    let anime = [];
    let media = 0;
    for(let i = 0; i < carte.length; i++)
    {
        if(!anime.includes(carte[i].cartoneAppartenenza))
        {
            anime.push( " " + carte[i].cartoneAppartenenza)
        }
         media += parseFloat(carte[i].punteggio);    
    }
    media /= carte.length
    document.getElementById('paragrafo').innerText = "Totale carte: " + carte.length + "\n Potenza media carte: " + media.toFixed(2) + "\n Anime: " + anime ;
}

paragrafo();