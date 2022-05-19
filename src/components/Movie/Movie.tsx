import { FilledStarIcon, PopcornIcon } from 'assets/svgs'

import { useEffect, useState, SyntheticEvent } from 'react'
import { useRecoil } from 'hooks/state'
import { favoriteListState, favoriteState } from 'states/movie'
import { ISearchItem } from 'types/movie'

import store from 'store'
import styles from './movie.module.scss'

const Movie = (props: ISearchItem) => {
  const { id, Poster, Title, Year, Type } = props
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

  const handleImgLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = Poster
  }

  const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '../../assets/svgs/error.svg'
  }

  useEffect(() => {
    store.set('favorites', favorites)
  }, [favorites])

  return toggleClick ? (
    <div className={styles.buttons}>
      <button className={styles.mainButton} type='button' onClick={handleFavorites}>
        {favorState ? '즐겨찾기 제거' : '즐겨찾기'}
      </button>
      <button className={styles.cancelButton} type='button' onClick={handleClick}>
        취소
      </button>
    </div>
  ) : (
    <li className={styles.movie} onClick={handleClick} role='presentation'>
      <div className={styles.imgContainer}>
        {Poster !== 'N/A' || '' ? (
          <img src={Poster} onLoad={handleImgLoad} onError={handleImgError} alt='poster' />
        ) : (
          <div className={styles.noPoster}>
            <PopcornIcon />
            <p>No Poster</p>
          </div>
        )}
      </div>
      <div className={styles.detailsContainer}>
        <p className={styles.title}>{Title}</p>
        <span className={styles.type}>{Type}</span>
        <span className={styles.year}>({Year})</span>
      </div>
      <FilledStarIcon className={styles.star} style={{ fill: favorState ? "url('#gradient')" : '#060817' }} />
    </li>
  )
}

export default Movie
