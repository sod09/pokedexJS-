const getPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((response) => response.json())
    .then((allPokemon) => {
      allPokemon.results.map((pokemon) => {
        getPokemonInfo(pokemon);
      });
    });
};

getPokemon();

const getPokemonInfo = (pokemon) => {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then((pokeInfo) => {
      document.body.innerHTML += getPokeCard(pokeInfo);
    });
};

const getPokeCard = (pokeInfo) => {
  return `
  <div class="pokecard">
  <p>Id: ${pokeInfo.id}</p>
  <h1 class="pokename">Name: ${pokeInfo.name}</h1>
  <img src="${pokeInfo.sprites.front_default}"</img>
  </div>`;
};
