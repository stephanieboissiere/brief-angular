import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoreService } from '../services/score.service';
import { Observable } from 'rxjs';
import { Ijoueur } from '../modele/ijoueur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ijoueur! : Array<Ijoueur>;
  submitted = false;
  score!: number;
  highScore: number;

  constructor(private scoreService: ScoreService) {
    this.highScore = 0;
  }

  ngOnInit() {
    this.scoreService.scoreBehaviorSubject.subscribe(value => {
      this.score = value;
      if (this.highScore < value) {
        this.highScore = value;
        this.setHighScore(this.highScore);
        this.getHighScore();
        
      }
    });
  }

  ngOnDestroy() {
    this.scoreService.scoreBehaviorSubject.unsubscribe();
  }
  getItemNum(key: string): number {
    return Number(window.localStorage.getItem(key));
  }
  setItemNum(key: string, value: number) {
    window.localStorage.setItem(key, value.toString());
  }

  getHighScore() {
    this.highScore = this.getItemNum("highScore");
    console.log(this.highScore)
  }

  setHighScore(value: number) {
    this.setItemNum('highScore', value);
    console.log(this.highScore)
  }

  addJoueur(name: string){
    this.ijoueur = this.scoreService.addJoueur(name); 

  }
  onSubmit() { 
    this.submitted = true;
   }
}

