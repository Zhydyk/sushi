import { Component, Input, OnInit } from '@angular/core';
import { Sushi } from 'src/app/models/sushi.model';

@Component({
  selector: 'sushi-list',
  templateUrl: './sushi-list.component.html',
  styleUrls: ['./sushi-list.component.scss']
})
export class SushiListComponent implements OnInit {
  @Input()
  public sushiList: Sushi[];

  public displayedColumns: string[] = ['number', 'name', 'address', 'phone', 'product', 'status'];

  constructor() { }

  ngOnInit(): void {
  }

}
