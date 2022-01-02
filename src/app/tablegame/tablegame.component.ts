import { Component, OnInit } from '@angular/core';
import { Icard } from '../modele/icard';


@Component({
  selector: 'app-tablegame',
  templateUrl: './tablegame.component.html',
  styleUrls: ['./tablegame.component.scss']
})
export class TablegameComponent implements OnInit {

  public list: Icard[] = [];
  constructor() {
    this.list.push(
      {
        id: 1,
        image: "assets/image/1C.png",
        value: 1
      },
      {
        id: 2,
        image: "assets/image/1H.png",
        value: 1
      },
      {
        id: 3,
        image: "assets/image/2C.png",
        value: 2
      },
      {
        id: 4,
        image: "assets/image/2H.png",
        value: 2
      },
      {
        id: 5,
        image: "assets/image/3C.png",
        value: 3
      },
      {
        id: 6,
        image: "assets/image/3H.png",
        value: 3
      },
      {
        id: 7,
        image: "assets/image/4C.png",
        value: 4
      },
      {
        id: 8,
        image: "assets/image/4H.png",
        value: 4
      },
      {
        id: 9,
        image: "assets/image/5C.png",
        value: 5
      },
      {
        id: 10,
        image: "assets/image/5H.png",
        value: 5
      },
      {
        id: 11,
        image: "assets/image/6C.png",
        value: 6
      },
      {
        id: 12,
        image: "assets/image/6H.png",
        value: 6
      },
      {
        id: 13,
        image: "assets/image/7C.png",
        value: 7
      },
      {
        id: 14,
        image: "assets/image/7H.png",
        value: 7
      },
      {
        id: 15,
        image: "assets/image/8C.png",
        value: 8
      },
      {
        id: 16,
        image: "assets/image/8H.png",
        value: 8
      }


    )

  }

  ngOnInit(): void {
  }

}
