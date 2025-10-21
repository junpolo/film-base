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
