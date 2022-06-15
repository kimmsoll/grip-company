import { useEffect, useState, SyntheticEvent } from 'react'
import store from 'store'
import { favoriteListState, favoriteState } from 'states/movie'
import { useRecoil } from 'hooks/state'
import { ISearchItem } from 'types/movie'

import { FilledStarIcon, PopcornIcon } from 'assets/svgs'

import styles from './movie.module.scss'
import FavoritesModal from 'components/Modal/FavoritesModal/FavoritesModal'

const Movie = (props: ISearchItem) => {
  const [toggleClick, setToggleClick] = useState(false)
  const [isFavorite, setIsFavorite] = useRecoil(favoriteState)
  const [favorites, setFavorites] = useRecoil(favoriteListState)

  const { imdbID, Poster, Title, Year, Type } = props
  const favorState = isFavorite.includes(imdbID)

  const handleToggleModal = () => {
    setToggleClick((prev) => !prev)
  }

  const handleImgLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = Poster
  }

  const handleFavorites = () => {
    if (favorState) {
      setFavorites((prev) => prev?.filter((v) => v.imdbID !== imdbID))
      setIsFavorite((prev) => prev?.filter((v) => v !== imdbID))
    } else {
      setFavorites((prev) => prev && [...prev, props])
      setIsFavorite((prev) => prev && [...prev, imdbID])
    }
    handleToggleModal()
  }

  useEffect(() => {
    store.set('favorites', favorites)
  }, [favorites])

  return (
    <>
      {toggleClick && (
        <FavoritesModal imdbID={imdbID} handleModal={handleToggleModal} handleFavorites={handleFavorites} />
      )}
      <li className={styles.movie} onClick={handleToggleModal} role='presentation'>
        <div className={styles.imgContainer}>
          {Poster !== 'N/A' || '' ? (
            <img src={Poster} onLoad={handleImgLoad} alt='poster' />
          ) : (
            <div className={styles.noPoster}>
              <PopcornIcon />
            </div>
          )}
        </div>
        <div className={styles.detailsContainer}>
          <p className={styles.title}>{Title}</p>
          <span className={styles.type}>{Type}</span>
          <span className={styles.year}>{Year}</span>
        </div>
        <FilledStarIcon className={styles.star} style={{ fill: favorState ? "url('#gradient')" : '#060817' }} />
      </li>
    </>
  )
}

export default Movie
