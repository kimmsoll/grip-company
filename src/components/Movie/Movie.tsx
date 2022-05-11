import { FilledStarIcon } from 'assets/svgs'
import { ISearchItem } from 'types/movie'
import styles from './Movie.module.scss'

const Movie = (props: ISearchItem) => {
  const {id, Poster, Title, Year, Type} = props

  return (
    <li className={styles.movie} id={id}>
      <div className={styles.imgContainer}>
        <img src={Poster} alt='poster' />
      </div>
      <div className={styles.detailsContainer}>
        <p className={styles.title}>{Title}</p>
        <p className={styles.year}>{Year}</p>
        <p className={styles.type}>{Type}</p>
      </div>
      <FilledStarIcon className={styles.star}/>
    </li>
  )
}

export default Movie