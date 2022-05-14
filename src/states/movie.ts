import { ISearchItem, ITotalResults } from 'types/movie'
import { atom } from 'hooks/state'
import store from 'store'

const favStatus = Boolean(store.get('favorites')?.length)
const favorites: ISearchItem[] = favStatus ? store.get('favorites') : []

export const movieListState = atom<ISearchItem[] | undefined>({
  key: '#movieListState',
  default: [],
})

export const favoriteListState = atom<ISearchItem[] | []>({
  key: '#favoriteListState',
  default: store.get('favorites') || [],
})

export const favoriteState = atom({
  key: '#favoriteState',
  default: favorites.map((v) => v.id) || [],
})

export const totalResultsState = atom<ITotalResults>({
  key: '#totalResultsState',
  default: { start: 1, end: 1 },
})

export const currentInputState = atom<string>({
  key: '#currentInputState',
  default: '',
})
