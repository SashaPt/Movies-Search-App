import { Component, OnInit } from '@angular/core';
import { MovieService } from './shared/service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getMoviesByTitle('shrek').subscribe((data) => {
      console.log(data);
    });
  }
}
