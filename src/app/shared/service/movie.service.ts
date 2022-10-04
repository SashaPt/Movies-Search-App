import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_KEY = 'bfdcab46';
const API_URL = 'http://www.omdbapi.com';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  getMoviesByTitle(title: string): Observable<any> {
    return this.httpClient.get<any>(`${API_URL}/?s=${title}&apikey=${API_KEY}`);
  }
}