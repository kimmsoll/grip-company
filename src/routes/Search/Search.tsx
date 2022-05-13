import MovieList from 'components/MovieList/MovieList'
import NavBar from 'components/NavBar/NavBar'
import SearchForm from 'components/SearchForm/SearchForm'
import { useRecoil } from 'hooks/state'
import { getMovies } from 'services/movie'
import { movieListState, totalResultsState } from 'states/movie'
import styles from './Search.module.scss'
import { ISearchItem } from 'types/movie'

interface Params {
  query: string
  page: number
}

const Search = () => {
  const [movies, setMovies] = useRecoil(movieListState)
  const [totalResults, setTotalResults] = useRecoil(totalResultsState)

  const getSearchedMovies = (params?: Params) => {
    if (params) {
      getMovies(params).then((data) => {
        if (data.Error) {
          // 구체적인 에러처리
          console.log(data.Error)
          return
        }
        if (data.Response === 'True') {
          movies?.length
            ? setMovies(Array.from(new Set(movies.concat(data.Search as ISearchItem[]))))
            : setMovies(data.Search)
          setTotalResults({ start: totalResults.start + 1, end: Number(data.totalResults) })
        }
        console.log(movies)
      })
    }
  }

  return (
    <div className={styles.searchPage}>
      <header className={styles.header}>
        <SearchForm getSearched={getSearchedMovies} />
      </header>
      <main className={styles.main}>
        <MovieList getSearched={getSearchedMovies} />
      </main>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </div>
  )
}

export default Search
