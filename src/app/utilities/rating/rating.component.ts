import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() maxRating = 5;
  maxRatingArr: any = [];
  @Input() selectedRate = 0;
  previousRate = 0;

  @Output() onRating: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }

  handleMouseLeave() {
    if (this.previousRate !== 0) {
      this.selectedRate = this.previousRate;
    } else {
      this.selectedRate = 0;
    }
  }

  rate(index: number) {
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }
}
