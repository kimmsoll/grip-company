import Header from 'components/Header/Header'
import MovieList from 'components/MovieList/MovieList'
import NavBar from 'components/NavBar/NavBar'
import styles from './Favorite.module.scss'

const Favorite = () => {
  return (
    <div className={styles.favoritesPage}>
      <Header />
      <MovieList />
      <NavBar />
    </div>
  )
}

export default Favorite
