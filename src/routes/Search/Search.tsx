import MovieList from 'components/MovieList/MovieList'
import NavBar from 'components/NavBar/NavBar'
import SearchForm from 'components/SearchForm/SearchForm'
import { useRecoil } from 'hooks/state'
import { getMovies } from 'services/movie'
import { movieListState } from 'states/movie'
import styles from './Search.module.scss'

interface Params {
  query: string
  page: number
}

const Search = () => {
  const [, setMovies] = useRecoil(movieListState)

  const getSearchedMovies = (params?: Params) => {
    if (params) {
      getMovies(params).then((data) => {
        if (data.Error) {
          // 구체적인 에러처리
          console.log(data.Error)
          return
        }
        if (data.Response === 'True') {
          setMovies(data.Search)
        }
      })
    }
  }

  return (
    <div className={styles.searchPage}>
      <header className={styles.header}>
        <SearchForm getSearched={getSearchedMovies} />
      </header>
      <main className={styles.main}>
        <MovieList />
      </main>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </div>
  )
}

export default Search
