import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilm, IMovie } from 'src/app/shared/model/movie.model';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  @Input() movie!: IMovie;
  @Output() onClick = new EventEmitter<string>();
  inputValue: string = '';
  selectedValue!: string;
  

  constructor() {}

  ngOnInit(): void {}

  films: IFilm[] = [
    { value: 'movie', viewValue: 'movie' },
    { value: 'series', viewValue: 'series' },
    { value: 'episode', viewValue: 'episode' },
  ];
  getMoviesByTitle(title: string) {
    this.onClick.emit(title);
  }
}
