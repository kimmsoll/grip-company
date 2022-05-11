import Movie from 'components/Movie/Movie'
import { useRecoil } from 'hooks/state'
import { useLocation } from 'react-use'
import { movieListState } from 'states/movie'
import styles from './MovieList.module.scss'

const MovieList = () => {
  const [movies] = useRecoil(movieListState)
  const location = useLocation()

  return (
    <main className={styles.main}>
      <ul className={styles.movieList}>
        {location.pathname === '/' && movies?.length &&
        movies.map((movie) => {
          const {imdbID, Poster, Title, Year, Type} = movie
          return <Movie 
          key={imdbID}
          id={imdbID}
          Poster={Poster}
          Title={Title}
          Year={Year}
          Type={Type}
        />
        })}
      </ul>
    </main>
  )
}

export default MovieList
