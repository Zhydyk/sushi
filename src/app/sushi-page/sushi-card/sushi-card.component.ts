import { Component, Input, OnInit } from '@angular/core';
import { Sushi } from 'src/app/models/sushi.model';

@Component({
  selector: 'sushi-card',
  templateUrl: './sushi-card.component.html',
  styleUrls: ['./sushi-card.component.scss']
})
export class SushiCardComponent implements OnInit {
  @Input()
  public sushiCard: Sushi;

  constructor() { }

  ngOnInit(): void {
  }

}
