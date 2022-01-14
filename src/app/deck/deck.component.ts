import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemoryService } from '../services/memory.service';
import { Icard } from '../modele/icard';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  list!: Icard[];

  constructor(private memoryService: MemoryService, private scoreService : ScoreService) {}

  ngOnInit(): void {
  
  }
  
startParty(){
  this.scoreService.resetMatchedCount()
  this.scoreService.resetScore();
  this.memoryService.resetList();
  this.list = this.memoryService.getAllCards();  

}

}
