export interface Genre {
    id: number
    name: string
  }
  
  export interface Movie {
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
  }
  
  export interface Element {
    type:
      | 'Bloopers'
      | 'Featurette'
      | 'Behind the Scenes'
      | 'Clip'
      | 'Trailer'
      | 'Teaser'
  }

export interface GenreType {
    [key: string]: number;
}

export interface BannerProps {
  netflixOriginals: Movie[]
}

export interface ProviderProps {
  children: ReactNode,
  session: Session | undefined
}

export interface RowProps {
  title: String;
  movies: Movie[];
}

export interface SearchResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  title?: string;
  release_date?: string;
  video?: boolean;
}

export interface SuggestionProps {
  jsonArray: SearchResult[];
  resetSuggestion: () => void;
}

export interface ThumbnailProps {
  movie: Movie;
}

export interface DetailsState {
  jsonData: string | null,
  setJsonData: (data:string)=> void
}