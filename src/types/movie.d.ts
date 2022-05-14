export interface ISearchItem {
  Title: string
  Year: string
  imdbID?: string
  Type: string
  Poster: string
  id?: string
}

export interface IMovieAPIRes {
  Search?: ISearchItem[]
  totalResults?: string
  Response?: 'True' | 'False'
  Error?: string
}

export interface ITotalResults {
  start: number
  end: number
}
