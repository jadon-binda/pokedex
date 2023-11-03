const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');

const responseAPI = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();
  return data;
}

const renderPokemon = async (pokemon) => {
  const data = await responseAPI(pokemon);
  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
}

renderPokemon('6');