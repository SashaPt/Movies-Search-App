import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieInfo, IResult } from '../model/movie.model';

const API_KEY = 'bfdcab46';
const API_URL = 'http://www.omdbapi.com';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getMoviesByTitle(
    title: string,
    type: string,
    pageNumber: number
  ): Observable<IResult> {
    return this.httpClient.get<IResult>(
      `${API_URL}/?s=${title}&type=${type}&page=${pageNumber}&apikey=${API_KEY}`
    );
  }
  getMovieById(id: string): Observable<IMovieInfo> {
    return this.httpClient.get<IMovieInfo>(
      `${API_URL}/?i=${id}&apikey=${API_KEY}`
    );
  }
}
