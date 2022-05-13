import { useState, ChangeEvent, FormEvent } from 'react'

import { SearchIcon } from 'assets/svgs'
import styles from './SearchForm.module.scss'
import { useRecoil } from 'hooks/state'
import { currentInputState, movieListState } from 'states/movie'

interface Params {
  query: string
  page: number
}

interface Props {
  getSearched(params?: Params): void
}

const SearchForm = ({ getSearched }: Props) => {
  const [inputValue, setInputValue] = useState('')
  const [, , moviesResetter] = useRecoil(movieListState)
  const [, setCurrentInput, currentInputResetter] = useRecoil(currentInputState)

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e && e.preventDefault()
    moviesResetter()
    currentInputResetter()
    setCurrentInput(inputValue.trim())
    inputValue.trim() && getSearched({ query: inputValue.trim(), page: 1 })
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
