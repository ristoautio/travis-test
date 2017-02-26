import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent implements OnInit {

  number: number = 0;

  constructor() {
    this.number = Math.floor((Math.random() * 10) + 1);
  }

  ngOnInit() {
  }

}
