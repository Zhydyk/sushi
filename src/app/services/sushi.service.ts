import { Injectable } from '@angular/core';
import { Sushi } from '../models/sushi.model';

@Injectable({
  providedIn: 'root',
})
export class SushiService {
  sushi: Sushi[] = [
    {
      id: '123',
      name: 'Ivan',
      address: 'Lviv',
      streetNumber: 15,
      productsOfSushi: 'Cheese Roll',
      phone: '+380123456789',
      status: 'kichen',
    },
    {
      id: '123',
      name: 'Ivan',
      address: 'Lviv',
      streetNumber: 15,
      productsOfSushi: 'Cheese Roll',
      phone: '+380123456789',
      status: 'kichen',
    },
    {
      id: '123',
      name: 'Ivan',
      address: 'Lviv',
      streetNumber: 15,
      productsOfSushi: 'Cheese Roll',
      phone: '+380123456789',
      status: 'kichen',
    },
    {
      id: '123',
      name: 'Ivan',
      address: 'Lviv',
      streetNumber: 15,
      productsOfSushi: 'Cheese Roll',
      phone: '+380123456789',
      status: 'kichen',
    },
    {
      id: '123',
      name: 'Ivan',
      address: 'Lviv',
      streetNumber: 15,
      productsOfSushi: 'Cheese Roll',
      phone: '+380123456789',
      status: 'kichen',
    },
    {
      id: '123',
      name: 'Ivan',
      address: 'Lviv',
      streetNumber: 15,
      productsOfSushi: 'Cheese Roll',
      phone: '+380123456789',
      status: 'kichen',
    },
  ];

  getSushies(): Sushi[] {
    return this.sushi;
  }

  createNewSushi(sushi: Partial<Sushi>): void {
    const updatedSushi = {
      id: sushi.id || null,
      name: sushi.name || null,
      address: sushi.address || null,
      streetNumber: sushi.streetNumber || null,
      productsOfSushi: sushi.productsOfSushi || null,
      phone: sushi.phone || null,
      status: sushi.status || null,
    }
    this.sushi.push(updatedSushi);
  }
}
