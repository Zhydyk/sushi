import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SushiService } from '../services/sushi.service';

@Component({
  selector: 'sushi-page',
  templateUrl: './sushi-page.component.html',
  styleUrls: ['./sushi-page.component.scss'],
})
export class SushiPageComponent {
  get sushi() {
    return this.sushiService.getSushies();
  }
  constructor(private router: Router, private sushiService: SushiService) {}

  public navigate() {
    this.router.navigate(['./new-order'])
  }
}
