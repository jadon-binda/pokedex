const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

let searchPokemon = 1;

const responseAPI = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (response.ok === true) {
    const data = await response.json();
    return data;
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await responseAPI(pokemon);

  if (data) {
    const { name, id, sprites } = data;

    pokemonName.innerHTML = name;
    pokemonNumber.innerHTML = id;
    pokemonImage.src = sprites.versions['generation-v']['black-white'].animated.front_default;
    pokemonImage.style.display = 'block';
    input.value = '';
  } else {
    pokemonName.innerHTML = 'Não encontrado!';
    pokemonNumber.innerHTML = '';
    pokemonImage.style.display = 'none';
    input.value = '';
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value);
});

renderPokemon(searchPokemon);