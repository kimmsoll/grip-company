import MovieList from 'components/MovieList/MovieList'
import NavBar from 'components/NavBar/NavBar'
import SearchForm from 'components/SearchForm/SearchForm'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.searchPage}>
      <header className={styles.header}>
        <SearchForm />
      </header>
      <MovieList />
      <NavBar />
    </div>
  )
}

export default Search