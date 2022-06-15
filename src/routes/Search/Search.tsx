import { useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import * as _ from 'lodash'

import { useRecoil } from 'hooks/state'
import { movieListState } from 'states/movie'
import { getMovies } from 'services/movie'

import SearchForm from 'routes/Search/SearchForm/SearchForm'
import Loading from 'components/Loading/Loading'
import NavBar from 'components/NavBar/NavBar'
import Movie from 'components/Movie/Movie'

import styles from './search.module.scss'

const Search = () => {
  const [movies, setMovies] = useRecoil(movieListState)
  const { ref, inView } = useInView({ threshold: 1 })
  const scrollRef = useRef<HTMLUListElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1)
  const [totalResults, setTotalResults] = useState(1)

  const currentSearch = searchParams.get('query') || ''

  const handleScrollToTop = () => {
    scrollRef.current?.scrollIntoView()
  }

  const getSearchedMovies = useCallback(
    (inputValue: string, page: number) => {
      if (!inputValue) return
      getMovies({ query: inputValue, page }).then((data) => {
        if (data.Error) {
          setTotalResults(0)
          return
        }
        if (data.Response === 'True') {
          if (movies.length && page !== 1) {
            setMovies(_.uniqBy(movies.concat(data.Search as any), (v) => v.imdbID))
            setSearchParams({ query: currentSearch, page: String(currentPage + 1) })
          } else {
            setMovies(() => _.uniqBy(data.Search, (v) => v.imdbID))
            setTotalResults(Number(data.totalResults))
            setCurrentPage(1)
          }
        }
      })
    },
    [movies, setMovies, setSearchParams, currentSearch, currentPage]
  )

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (currentSearch && inView && totalResults >= currentPage) {
      timeout = setTimeout(() => {
        setCurrentPage((prev) => prev + 1)
        getSearchedMovies(currentSearch, currentPage + 1)
      }, 1500)
    }
    return () => clearTimeout(timeout)
  }, [inView, getSearchedMovies, totalResults, currentPage, currentSearch])

  return (
    <div className={styles.searchPage}>
      <header className={styles.header}>
        <SearchForm getMovies={getSearchedMovies} handleToTop={handleScrollToTop} />
      </header>
      <main className={styles.main}>
        <ul className={styles.movieList} ref={scrollRef}>
          {!movies.length && <li className={styles.noSearchResult}>검색 결과가 없습니다</li>}
          {movies.length &&
            movies.map((movie) => {
              const { imdbID, Poster, Title, Year, Type } = movie
              return <Movie key={imdbID} imdbID={imdbID} Poster={Poster} Title={Title} Year={Year} Type={Type} />
            })}
          <li ref={ref}>{movies.length && currentSearch && inView && currentPage <= totalResults && <Loading />}</li>
        </ul>
      </main>
      <NavBar />
    </div>
  )
}

export default Search
