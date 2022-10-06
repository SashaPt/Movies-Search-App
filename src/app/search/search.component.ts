import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie, IType } from 'src/app/shared/model/movie.model';
import { MovieService } from '../shared/service/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() movie!: IMovie;
  movies: IMovie[] = [];
  inputValue: string = '';
  selectedValue: string = 'Movie';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  types: IType[] = [
    { value: 'movie', viewValue: 'Movie' },
    { value: 'series', viewValue: 'Series' },
    { value: 'episode', viewValue: 'Episode' },
  ];
  getMovies() {
    if (!this.inputValue) return;
    return this.movieService
      .getMoviesByTitle(this.inputValue, this.selectedValue)
      .subscribe((data) => {
        this.movies = data.Search;
      });
  }
}
