import { useState, ChangeEvent, FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SearchIcon } from 'assets/svgs'

import styles from './searchForm.module.scss'

interface Props {
  getMovies: (inputValue: string, page: number) => void
  handleToTop: () => void
}

const SearchForm = ({ getMovies, handleToTop }: Props) => {
  const [inputValue, setInputValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const currentSearch = searchParams.get('query')

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.currentTarget.focus()
    if (!inputValue || currentSearch === inputValue.trim()) return
    getMovies(inputValue.trim(), 1)
    setSearchParams({ query: inputValue.trim(), page: '1' })
    handleToTop()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name='input' className={styles.input} value={inputValue} onChange={handleInputValue} type='text' />
      <button className={styles.button} type='submit'>
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchForm
