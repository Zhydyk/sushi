import { Component, OnInit } from '@angular/core';
import { Sushi } from '../models/sushi.model';

@Component({
  selector: 'sushi-page',
  templateUrl: './sushi-page.component.html',
  styleUrls: ['./sushi-page.component.scss'],
})
export class SushiPageComponent implements OnInit {
  public sushi: Sushi[];
  constructor() {}

  ngOnInit(): void {
    this.sushi = [
      {
        id: '123',
        name: 'Ivan',
        address: 'Lviv',
        steetNumber: 15,
        productsOfSushi: 'Cheese Roll',
        phone: '+380123456789',
        status: 'kichen',
      },
      {
        id: '123',
        name: 'Ivan',
        address: 'Lviv',
        steetNumber: 15,
        productsOfSushi: 'Cheese Roll',
        phone: '+380123456789',
        status: 'kichen',
      },
      {
        id: '123',
        name: 'Ivan',
        address: 'Lviv',
        steetNumber: 15,
        productsOfSushi: 'Cheese Roll',
        phone: '+380123456789',
        status: 'kichen',
      },
      {
        id: '123',
        name: 'Ivan',
        address: 'Lviv',
        steetNumber: 15,
        productsOfSushi: 'Cheese Roll',
        phone: '+380123456789',
        status: 'kichen',
      },
      {
        id: '123',
        name: 'Ivan',
        address: 'Lviv',
        steetNumber: 15,
        productsOfSushi: 'Cheese Roll',
        phone: '+380123456789',
        status: 'kichen',
      },
      {
        id: '123',
        name: 'Ivan',
        address: 'Lviv',
        steetNumber: 15,
        productsOfSushi: 'Cheese Roll',
        phone: '+380123456789',
        status: 'kichen',
      },
    ];
  }
}
