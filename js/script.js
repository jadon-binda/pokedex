const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const btnPrevious = document.querySelector('.btn__prev');
const btnNext = document.querySelector('.btn__next');

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
    pokemonImage.src = sprites.versions['generation-v']['black-white'].animated.front_default
      ?? sprites.versions['generation-v']['black-white'].front_default
      ?? sprites.front_default
      ?? sprites.other['official-artwork'].front_default;
    pokemonImage.style.display = 'block';
    input.value = '';
    searchPokemon = id;
  } else {
    pokemonName.innerHTML = 'Not found!';
    pokemonNumber.innerHTML = '';
    pokemonImage.style.display = 'none';
    input.value = '';
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.trim());
});

btnPrevious.addEventListener('click', () => {
  searchPokemon--;
  if (searchPokemon < 1) {
    searchPokemon = 1017;
  }
  renderPokemon(searchPokemon);
});

btnNext.addEventListener('click', () => {
  searchPokemon++;
  if (searchPokemon > 1017) {
    searchPokemon = 1;
  }
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);