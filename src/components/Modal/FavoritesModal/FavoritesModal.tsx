import { useRecoil } from 'hooks/state'
import { favoriteState } from 'states/movie'

import Modal from '../Modal'

import styles from './favoritesModal.module.scss'

interface Props {
  imdbID: string
  handleModal: () => void
  handleFavorites: () => void
}

const FavoritesModal = ({ imdbID, handleModal, handleFavorites }: Props) => {
  const [isFavorite] = useRecoil(favoriteState)
  const favorState = isFavorite.includes(imdbID)

  return (
    <Modal>
      <div className={styles.background}>
        <div className={styles.content}>
          <button className={styles.mainButton} type='button' onClick={handleFavorites}>
            {favorState ? '즐겨찾기 제거' : '즐겨찾기'}
          </button>
          <button className={styles.cancelButton} type='button' onClick={handleModal}>
            취소
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default FavoritesModal
