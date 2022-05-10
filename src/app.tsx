import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorite from './routes/favorite/Favorite'
import Search from './routes/search/Search'
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
