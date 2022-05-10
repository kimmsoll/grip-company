import { SearchIcon } from 'assets/svgs'
import { useState } from 'react'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
  const [inputValue, setInputValue] = useState()
  const handleSubmit = () => {}

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name='input'
        className={styles.input}
        value={inputValue}
        type='text'
      />
      <button className={styles.button} type="submit" onClick={handleSubmit}>
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchForm
