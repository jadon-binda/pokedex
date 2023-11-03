const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const responseAPI = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();
  return data;
}

const renderPokemon = async (pokemon) => {
  const data = await responseAPI(pokemon);
  const { name, id, sprites } = data;
  pokemonName.innerHTML = name;
  pokemonNumber.innerHTML = id;
  pokemonImage.src = sprites.versions['generation-v']['black-white'].animated.front_default;
}