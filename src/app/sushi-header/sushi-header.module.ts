import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SushiHeaderComponent } from './sushi-header.component';


@NgModule({
  declarations: [SushiHeaderComponent],
  imports: [CommonModule],
  exports: [SushiHeaderComponent]
})
export class SushiHeaderModule {}
