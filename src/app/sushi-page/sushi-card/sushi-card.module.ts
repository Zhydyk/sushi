import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SushiCardComponent } from './sushi-card.component';


@NgModule({
  declarations: [SushiCardComponent],
  imports: [CommonModule],
  exports: [SushiCardComponent]
})
export class SushiCardModule {}