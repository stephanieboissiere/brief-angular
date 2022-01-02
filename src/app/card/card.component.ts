import { Component, Input, OnInit } from '@angular/core';
import { Icard } from '../modele/icard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public data: Icard|null = null;

  @Input()
  public flipped: boolean = false;
  
  constructor() { }

  toggleFlip(){
    //this.flipped = |this.flipped;
    if (this.flipped = false ){
      return  true;
    }else if(this.flipped = true) {
      return  false;
    }return ""
    

    
  }


  ngOnInit(): void {
  }

}
