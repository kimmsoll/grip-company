import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import Favorite from './routes/Favorite/Favorite'
import Search from './routes/Search/Search'
import NotFound from 'routes/NotFound/NotFound'

import styles from './app.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='favorite' element={<Favorite />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
