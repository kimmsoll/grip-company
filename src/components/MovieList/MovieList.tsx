import Movie from 'components/Movie/Movie'
import { useRecoil } from 'hooks/state'
import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { favoriteListState, movieListState, totalResultsState, currentInputState } from 'states/movie'
import styles from './MovieList.module.scss'

interface Params {
  query: string
  page: number
}

interface Props {
  getSearched?(params?: Params): void
}

const MovieList = ({ getSearched }: Props) => {
  const location = useLocation()
  const [movies] = useRecoil(movieListState)
  const [favorites] = useRecoil(favoriteListState)
  const [totalResults] = useRecoil(totalResultsState)
  const [currentInput] = useRecoil(currentInputState)
  const [target, setTarget] = useState<HTMLDivElement | null>(null)

  const inSearchPage = location.pathname === '/'
  const inFavoritesPage = location.pathname === '/favorite'

  const onIntersection: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting && totalResults.end && totalResults.start < totalResults.end) {
        observer.unobserve(entry.target)
        getSearched!({ query: currentInput, page: totalResults.start + 1 })
        observer.observe(entry.target)
      }
    },
    [currentInput, totalResults, getSearched]
  )

  useEffect(() => {
    let observer: IntersectionObserver
    if (!target) return undefined
    if (target) {
      observer = new IntersectionObserver(onIntersection, {
        threshold: 1,
      })
      observer.observe(target)
    }
    return () => observer && observer.disconnect()
  }, [onIntersection, target])

  return (
    <>
      {inSearchPage && (
        <div className={styles.movieListWrapper}>
          <ul className={styles.movieList}>
            {!movies?.length && <li className={styles.noSearchResult}>검색 결과가 없습니다</li>}
            {movies?.length &&
              movies.map((movie) => {
                const { imdbID, Poster, Title, Year, Type } = movie
                return <Movie key={imdbID} id={imdbID} Poster={Poster} Title={Title} Year={Year} Type={Type} />
              })}
          </ul>
          <div ref={setTarget}>Loading</div>
        </div>
      )}
      {inFavoritesPage && (
        <ul className={styles.movieList}>
          {!favorites?.length && <li className={styles.noSearchResult}>즐겨찾기가 비었습니다</li>}
          {favorites?.length &&
            favorites.map((movie) => {
              const { id, Poster, Title, Year, Type } = movie
              return <Movie key={id} id={id} Poster={Poster} Title={Title} Year={Year} Type={Type} />
            })}
        </ul>
      )}
    </>
  )
}

export default MovieList
