import { Component, OnInit } from '@angular/core';
import { IMovie } from './shared/model/movie.model';
import { MovieService } from './shared/service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  getMoviesByTitle(title: string) {
    return this.movieService.getMoviesByTitle(`${title}`).subscribe((data) => {
      this.movies = data.Search;
    });
  }
}
