export type MovieItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type MovieResponse = {
  Search: MovieItem[];
  totalResults: string;
  Response: string;
  Error?: string;
};

export type MovieRatingType = {
  Source: string;
  Value: string;
};

export type MovieDetailsReponse = MovieItem & {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRatingType[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};
