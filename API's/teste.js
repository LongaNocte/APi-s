
const firstResponce = await fetch("https://pokeapi.co/api/v2/pokemon/");
const pokemonDados = await firstResponce.json();




 async function pokemons(dadosDosPokemon){
    const dadosFalsos = dadosDosPokemon.url
    const dadosReais = await fetch(dadosFalsos)
    const reais = await dadosReais.json()
    console.log(dadosReais)
}
pokemonDados.results.forEach(pokemons)
