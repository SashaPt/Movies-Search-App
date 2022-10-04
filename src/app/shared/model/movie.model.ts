export interface IFilm {
  value: string;
  viewValue: string;
}
export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
export interface IResult {
  Response: string;
  Search: IMovie[];
  totalResults: string;
}
