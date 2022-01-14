import { Injectable } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TablegameComponent } from '../tablegame/tablegame.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Ijoueur } from '../modele/ijoueur';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private ijoueur : Array<Ijoueur>;
  private highScore : number;
  private matchedCount : number;
  private score: number;
  public scoreBehaviorSubject: BehaviorSubject<number>;

  constructor() {
    this.ijoueur = new Array<Ijoueur>();
    this.highScore = 0,
    this.matchedCount = 0,
    this.score = 0,
    this.scoreBehaviorSubject = new BehaviorSubject<number>(0);

  }

  resetMatchedCount() {
this.matchedCount = 0;
  }

  incrementMatchCount(){
    this.matchedCount++;
        if (this.matchedCount === 8) {
          confirm('bravo')
        }
  }
 incrementHighScore(){
  this.scoreBehaviorSubject.next(++this.score);
  if(this.score > this.highScore)
  this.highScore = this.score
 }

  resetScore() {
    this.score = 0;
    this.scoreBehaviorSubject.next(this.score);
  }

  incrementTheScore(): void {
    this.scoreBehaviorSubject.next(++this.score);
   // console.log(this.score)
   
  }
  addJoueur(name : string){
    this.ijoueur.push(new Ijoueur(this.ijoueur.length + 1, name));
    return this.ijoueur;
  }

}