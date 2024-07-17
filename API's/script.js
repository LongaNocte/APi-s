

const firstResponce = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
const pokemonDados = await firstResponce.json();





 async function pokemons(dadosDosPokemon){
    const promiseDosDados = await fetch(dadosDosPokemon.url);
    const dadosReais = await promiseDosDados.json();
    const { name, sprites } = dadosReais; 

    const carta = document.createElement("div")
    carta.classList.add("carta");
   
    const nome = document.createElement("p")
    nome.textContent = name;

    const foto = document.createElement("img")
    foto.classList.add("foto")
    foto.src = sprites.front_default ;
    
    carta.appendChild(nome)
    carta.appendChild(foto)
    document.body.appendChild(carta)
 

}
pokemonDados.results.forEach(pokemons)




