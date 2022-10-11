import { Component, Input, OnInit } from '@angular/core';
import { IMovie, IMovieInfo } from '../shared/model/movie.model';
import { MovieService } from '../shared/service/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie!: IMovie;
  movieInfo!: IMovieInfo;
  isLoading: boolean = false;
  constructor(private movieService: MovieService, public dialog: MatDialog) {}

  ngOnInit(): void {}
  getMovieInfo() {
    this.isLoading = true;
    return this.movieService
      .getMovieById(this.movie.imdbID)
      .subscribe((data) => {
        this.movieInfo = data;
        this.dialog.open(DialogComponent, {
          data: this.movieInfo,
        });
        this.isLoading = false;
      });
  }
}
