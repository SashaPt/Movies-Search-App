import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/model/movie.model';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  selectedValue!: string;
  selectedCar!: string;
  constructor() {}

  ngOnInit(): void {}

  films: IFilm[] = [
    { value: 'movie', viewValue: 'movie' },
    { value: 'series', viewValue: 'series' },
    { value: 'episode', viewValue: 'episode' },
  ];
}
