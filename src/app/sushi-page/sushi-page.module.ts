import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SushiPageComponent } from './sushi-page.component';
import { SushiHeaderModule } from '../sushi-header/sushi-header.module';
import { SushiListModule } from './sushi-list/sushi-list.module';


@NgModule({
  declarations: [SushiPageComponent],
  imports: [CommonModule, SushiHeaderModule, SushiListModule],
  exports: [SushiPageComponent]
})
export class SushiPageModule {}
