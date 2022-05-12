import Movie from 'components/Movie/Movie'
import { useRecoil } from 'hooks/state'
import { useLocation } from 'react-use'
import { favoriteListState, movieListState } from 'states/movie'
import styles from './MovieList.module.scss'

const MovieList = () => {
  const [movies] = useRecoil(movieListState)
  const [favorites] = useRecoil(favoriteListState)
  const location = useLocation()

  const inSearchPage = location.pathname === '/'
  const inFavoritesPage = location.pathname === '/favorite'

  return (
    <ul className={styles.movieList}>
      { inSearchPage && !movies?.length &&
        <li className={styles.noSearchResult}>검색 결과가 없습니다</li>
      }
      { inSearchPage && movies?.length &&
        movies?.map((movie) => {
          const {imdbID, Poster, Title, Year, Type} = movie
          return <Movie 
          key={imdbID}
          id={imdbID}
          Poster={Poster}
          Title={Title}
          Year={Year}
          Type={Type}
          />
        })
      }
      { inFavoritesPage && !favorites?.length &&
        <li className={styles.noSearchResult}>즐겨찾기가 비었습니다</li>
      }
      { inFavoritesPage && favorites?.length &&
        favorites.map((movie) => {
          const {id, Poster, Title, Year, Type} = movie
          return <Movie 
          key={id}
          id={id}
          Poster={Poster}
          Title={Title}
          Year={Year}
          Type={Type}
          />
        })
      }
    </ul>
  )
}

export default MovieList
