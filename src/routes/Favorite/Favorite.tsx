import { useRecoil } from 'hooks/state'
import { favoriteListState } from 'states/movie'

import NavBar from 'components/NavBar/NavBar'
import Movie from 'components/Movie/Movie'

import styles from './favorite.module.scss'

const Favorite = () => {
  const [favorites] = useRecoil(favoriteListState)

  return (
    <div className={styles.favoritesPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>내 즐겨찾기</h1>
      </header>
      <main className={styles.main}>
        <ul className={styles.movieList}>
          {!favorites.length && <li className={styles.noSearchResult}>즐겨찾기가 비었습니다</li>}
          {favorites.length &&
            favorites.map((movie) => {
              const { id, Poster, Title, Year, Type } = movie
              return <Movie key={id} id={id} Poster={Poster} Title={Title} Year={Year} Type={Type} />
            })}
        </ul>
      </main>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </div>
  )
}

export default Favorite
