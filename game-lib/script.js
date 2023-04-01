const gameLibrary = [];
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const container = document.getElementById('container');
addBtn.addEventListener('click', addGameToLibrary);
removeBtn.addEventListener('click', removeGameLibrary);

function Game(title, genre, protagonist) {
  this.title = title;
  this.genre = genre;
  this.protagonist = protagonist;
}

function addGameToLibrary() {
  const gameTitle = document.getElementById('title');
  const gameGenre = document.getElementById('genre');
  const gameProtagonist = document.getElementById('protagonist');
  const newGame = new Game(gameTitle.value, gameGenre.value, gameProtagonist.value);
  gameLibrary.push(newGame);
  displayGameLibrary();
  emptyInputFields();
}

function displayGameLibrary() {
  let output = '';

  gameLibrary.forEach(game => {
    output += `<div><h3>${game.title}</h3><p>Genre: ${game.genre}</p><p>Protagonist: ${game.protagonist}</p></div>`;
  });
  container.innerHTML = output;
}

function removeGameLibrary() {
  gameLibrary.length = 0;
  container.innerHTML = '';
}

function emptyInputFields() {
  document.getElementById('title').value = '';
  document.getElementById('genre').value = '';
  document.getElementById('protagonist').value = '';
}