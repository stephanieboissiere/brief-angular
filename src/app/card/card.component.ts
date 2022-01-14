
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icard } from '../modele/icard';
import { MemoryService } from '../services/memory.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input()
  public data: Icard | null = null;

  @Input()
  public flipped: boolean = false;

  @Output() cardClicked = new EventEmitter();

  constructor(private memoryService: MemoryService) { }


  ngOnInit(): void {
  }

}
