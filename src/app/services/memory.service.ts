import { Injectable } from '@angular/core';
import { Icard } from '../modele/icard';
import { Subject } from 'rxjs';
import { CardComponent } from '../card/card.component';


@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  cartesSubject = new Subject <any[]>();

  private list: Icard[];

    constructor(){
      this.list = this.createNewList();
    }

    private createNewList() {
      let list: Icard[] = 
       [
        {
          id: 1,
          image: "assets/image/1C.png",
          value: 1,
          state: 'default'
        },
        {
          id: 2,
          image: "assets/image/1H.png",
          value: 1,
          state: 'default'
        },
        {
          id: 3,
          image: "assets/image/2C.png",
          value: 2,
          state: 'default',
        },
        {
          id: 4,
          image: "assets/image/2H.png",
          value: 2,
          state: 'default',
        },
        {
          id: 5,
          image: "assets/image/3C.png",
          value: 3,
          state: 'default',
        },
        {
          id: 6,
          image: "assets/image/3H.png",
          value: 3,
          state: 'default',
        },
        {
          id: 7,
          image: "assets/image/4C.png",
          value: 4,
          state: 'default'
        },
        {
          id: 8,
          image: "assets/image/4H.png",
          value: 4,
          state: 'default'
        },
        {
          id: 9,
          image: "assets/image/5C.png",
          value: 5,
          state: 'default'
        },
        {
          id: 10,
          image: "assets/image/5H.png",
          value: 5,
          state: 'default'
        },
        {
          id: 11,
          image: "assets/image/6C.png",
          value: 6,
          state: 'default'
        },
        {
          id: 12,
          image: "assets/image/6H.png",
          value: 6,
          state: 'default'
        },
        {
          id: 13,
          image: "assets/image/7C.png",
          value: 7,
          state: 'default'
        },
        {
          id: 14,
          image: "assets/image/7H.png",
          value: 7,
          state: 'default'
        },
        {
          id: 15,
          image: "assets/image/8C.png",
          value: 8,
          state: 'default'
        },
        {
          id: 16,
          image: "assets/image/8H.png",
          value: 8,
          state: 'default'
        }
      ];
      return list;
    }
    
   /*  emitCartesSubject(){
      this.cartesSubject.next(this.list.slice());
    } */

    resetList() {
      //this.list = this.createNewList();
      this.list.forEach(card => {card.state = 'default';});
    }
    getAllCards() {
     return this.list = this.shuffleArray(this.list) ;
    }

    shuffleArray(Array: any[]): any[] {
        return Array.sort(() =>0.5 - Math.random());
      } 


      
    
    }
    