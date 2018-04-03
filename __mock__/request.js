import movies from '__mock__/moviesData'

export default function request(id) {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () =>
        movies.results
          ? resolve(movies.results.find(movie => id === movie.id))
          : reject({
              error: 'User with ' + id + ' not found.',
            }),
    )
  })
}
