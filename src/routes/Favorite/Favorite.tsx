import MovieList from 'components/MovieList/MovieList'
import NavBar from 'components/NavBar/NavBar'
import styles from './favorite.module.scss'

const Favorite = () => {
  return (
    <div className={styles.favoritesPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>내 즐겨찾기</h1>
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

export default Favorite
