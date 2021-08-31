import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  moviesInTheaters: any;
  moviesFutureReleases: any;

  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: 'Holy Shit',
        releaseDate: new Date(),
        price: 1400,
        poster: '',
      },
      {
        title: 'MD',
        releaseDate: new Date('1993-4-15'),
        price: 50,
        poster: '',
      },
    ];
  }
  handleRating(rate: number) {
    alert(`user selected ${rate}`);
  }
}
