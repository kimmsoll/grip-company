import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorite from './routes/favorite/Favorite'
import Search from './routes/search/Search'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App