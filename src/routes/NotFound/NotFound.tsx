import styles from './notFound2.module.scss'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 Error</h1>
      <p>페이지가 존재하지 않습니다</p>
    </div>
  )
}

export default NotFound
