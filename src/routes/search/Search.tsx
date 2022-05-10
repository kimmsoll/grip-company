import Header from 'components/Header/Header'
import MovieList from 'components/MovieList/MovieList'
import NavBar from 'components/NavBar/NavBar'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.searchPage}>
      <Header />
      <MovieList />
      <NavBar />
    </div>
  )
}

export default Search