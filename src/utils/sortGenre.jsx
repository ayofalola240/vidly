export function sortGenre(allMovies, currentGenre) {
  if (currentGenre === null) return allMovies;

  return allMovies.filter((m) => {
    console.log(m.genre);
    return m.genre.name === currentGenre.name;
  });
}
