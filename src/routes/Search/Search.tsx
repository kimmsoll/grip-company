import SearchForm from 'components/SearchForm/SearchForm'
import MovieList from 'components/MovieList/MovieList'
import NavBar from 'components/NavBar/NavBar'

import { useRecoil } from 'hooks/state'
import { getMovies } from 'services/movie'
import { currentInputState, movieListState, totalResultsState } from 'states/movie'
import { ISearchItem } from 'types/movie'

import * as _ from 'lodash'
import styles from './Search.module.scss'

interface Params {
  query: string
  page: number
}

const Search = () => {
  const [movies, setMovies] = useRecoil(movieListState)
  const [totalResults, setTotalResults] = useRecoil(totalResultsState)
  const [, , currentInputResetter] = useRecoil(currentInputState)

  const getSearchedMovies = (params?: Params) => {
    if (params) {
      getMovies(params).then((data) => {
        if (data.Error) {
          currentInputResetter()
          setTotalResults({ start: 1, end: 1 })
          return
        }
        if (data.Response === 'True') {
          if (movies && movies.length && params.page !== 1) {
            setMovies(_.uniqBy(movies.concat(data.Search as ISearchItem[]), (v) => v.imdbID))
            setTotalResults({ start: totalResults.start + 1, end: Number(data.totalResults) })
          } else {
            setMovies(_.uniqBy(data.Search, (v) => v.imdbID))
            setTotalResults({ start: 2, end: Number(data.totalResults) })
          }
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
        <MovieList getSearched={getSearchedMovies} />
      </main>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </div>
  )
}

export default Search
