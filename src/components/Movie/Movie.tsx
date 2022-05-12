import { FilledStarIcon, PopcornIcon } from 'assets/svgs'
import { useRecoil } from 'hooks/state'
import { useEffect, useState } from 'react'
import { favoriteListState, favoriteState } from 'states/movie'
import { ISearchItem } from 'types/movie'
import styles from './Movie.module.scss'
import store from 'store'

const Movie = (props: ISearchItem) => {
  const {id, Poster, Title, Year, Type} = props
  const [toggleClick, setToggleClick] = useState(false)
  const [favorites, setFavorites] = useRecoil(favoriteListState)
  const [isFavorite, setIsFavorite] = useRecoil(favoriteState)
  const favorState = isFavorite.includes(id)
  
  const handleClick = () => {
    setToggleClick((prev) => !prev)
  }
  
  const handleFavorites = () => {
    if (favorState) {
      setFavorites((prev) => prev?.filter((v) => v.id !== id))
      setIsFavorite((prev) => prev?.filter((v) => v !== id))
    } else {
      setFavorites((prev) => prev && [...prev, props])
      setIsFavorite((prev) => prev && [...prev, id])
    }
    handleClick()
  }

  useEffect(() => {
    store.set('favorites', favorites)
  }, [favorites])

  return (
    toggleClick ?
      <div className={styles.buttons}>
        <button className={styles.button} type='button' onClick={handleFavorites}>
          {favorState ? '즐겨찾기 제거' : '즐겨찾기'}
        </button>
        <button className={styles.button} type='button' onClick={handleClick}>취소</button>
      </div>
      :
      <li className={styles.movie} onClick={handleClick} role='presentation'>
        <div className={styles.imgContainer}>
          {Poster !== 'N/A' ? <img src={Poster} alt='poster' />
          :
          <div className={styles.noPoster}>
            <PopcornIcon />
            <p>No Poster</p>
          </div>
          }
        </div>
        <div className={styles.detailsContainer}>
          <p className={styles.title}>{Title}</p>
          <p className={styles.year}>{Year}</p>
          <p className={styles.type}>{Type}</p>
        </div>
        <FilledStarIcon className={styles.star} style={
          {fill : favorState ? '#0EDAD6' : '#060817'}
        }/>
      </li>
  )
}

export default Movie