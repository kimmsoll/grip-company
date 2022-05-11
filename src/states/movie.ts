import { ISearchItem } from 'types/movie'
import { atom } from 'hooks/state'

export const movieListState = atom<ISearchItem[] | undefined>({
  key: '#movieListState',
  default: [],
})

export const favoriteMovieState = atom({
  key: '#favoriteMovieState',
  default: [],
})
