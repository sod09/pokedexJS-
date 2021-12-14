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
      console.log(pokeInfo);
    });
};

// const getPokemonTypes = (pokemon) => {
//   let url = pokemon.url;
//   fetch(url)
//     .then((response) => response.json())
//     .then((pokeTypes) => {
//       return `<li>${pokeTypes.types}</li>`;
//     });
// };

const getPokeCard = (pokeInfo) => {
  const pokeNameCaps = pokeInfo.name.toUpperCase();

  const pokeTypes = pokeInfo.types
    .map((type) => {
      const pokeType = type.type.name;
      return pokeType;
    })
    .join(", ");

  return `
  <div class="pokecontainer">
  <div class="pokecard">
  
  <h1 class="pokename">${pokeNameCaps}</h1>
  <img class="pokeimg" src="${pokeInfo.sprites.front_default}"</img>
  <div class=poketypes>Type: ${pokeTypes}</div>
  </div>
  </div>`;
};
