import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  totalPages: number = 0;
  pageIndex: number = 0;
  isError: boolean =false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  types: IType[] = [
    { value: 'movie', viewValue: 'Movie' },
    { value: 'series', viewValue: 'Series' },
    { value: 'episode', viewValue: 'Episode' },
  ];
  getMovies(isNewMovie?: boolean) {
    this.pageIndex = isNewMovie ? 0 : this.pageIndex;
    return this.movieService
      .getMoviesByTitle(this.inputValue, this.selectedValue, this.pageIndex + 1)
      .subscribe((data) => {
        if (data.Response === 'False') {
          this.movies = [];
          this.isError = true;
          return;
        }
        this.movies = data.Search;
        this.isError = false;
        this.totalPages = Number(data.totalResults);
      });
  }
  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.getMovies();
  }
}
