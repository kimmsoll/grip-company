import MovieList from 'components/MovieList/MovieList'
import NavBar from 'components/NavBar/NavBar'
import styles from './Favorite.module.scss'

const Favorite = () => {
  return (
    <div className={styles.favoritesPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>내 즐겨찾기</h1>
      </header>
      <MovieList />
      <NavBar />
    </div>
  )
}

export default Favorite
