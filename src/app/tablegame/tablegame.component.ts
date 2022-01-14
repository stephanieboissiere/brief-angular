import { Component, Input, OnInit } from '@angular/core';
import { Icard } from '../modele/icard';
import { CardComponent } from '../card/card.component';
import { MemoryService } from '../services/memory.service';
import { ScoreService } from '../services/score.service';


@Component({
  selector: 'app-tablegame',
  templateUrl: './tablegame.component.html',
  styleUrls: ['./tablegame.component.scss']
})
export class TablegameComponent implements OnInit {


  list!: Icard[];
  private matchedCount = 0;

  constructor(private memoryService: MemoryService, private scoreService : ScoreService) { }


  ngOnInit(): void {
    this.list = this.memoryService.getAllCards();
  }


  flippedCards =  Array<Icard>();
  cardClicked(index: number): void {
    const cardInfo = this.list[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);
      this.scoreService.incrementTheScore();

      if (this.flippedCards.length === 2) {
        this.checkForCardMatch();
      }
    } 

  }
 
  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.value === cardTwo.value ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;
      this.flippedCards = [];
      if (nextState === 'matched') {
        this.scoreService.incrementMatchCount()
        
      }
    }, 1000);
  }

/* restart(): void{
    this.matchedCount = 0;
    this.memoryService.resetList();
   this.list = this.memoryService.getAllCards();
} */




}




