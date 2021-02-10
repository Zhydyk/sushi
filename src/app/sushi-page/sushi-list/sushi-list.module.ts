import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SushiListComponent } from './sushi-list.component';
import { SushiCardModule } from '../sushi-card/sushi-card.module';



@NgModule({
  declarations: [SushiListComponent],
  imports: [CommonModule, SushiCardModule],
  exports: [SushiListComponent]
})
export class SushiListModule {}