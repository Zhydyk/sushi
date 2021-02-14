import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Sushi } from 'src/app/models/sushi.model';
import { SushiService } from '../services/sushi.service';

@Component({
  selector: 'sushi-form',
  templateUrl: './sushi-form.component.html',
  styleUrls: ['./sushi-form.component.scss']
})
export class SushiFormComponent implements OnInit {
  public newSushi: Partial<Sushi> = {};

  @Input()
  public sushi: Sushi;

  constructor(private sushiService: SushiService, private router: Router) { }

  ngOnInit(): void {
    if(this.sushi) {
      this.newSushi = this.sushi;
    }
  }

  public onSave(): void {
    this.sushiService.createNewSushi(this.newSushi);
    this.router.navigate(['./sushi'])
  }

  public onCancel(): void {
    console.log('cancel')
  }
}
