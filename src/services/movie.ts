import { axios } from 'utils/axios'
import { IMovieAPIRes } from 'types/movie.d'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`

interface Params {
  query: string
  page: number
}

export const getMovies = async (params: Params) => {
  const { query, page } = params
  const res = await axios.get<IMovieAPIRes>(`${BASE_URL}&s=${query}&page=${page}`).then((data) => data.data)
  return res
}
