import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SushiPageComponent } from './sushi-page.component';
import { SushiHeaderModule } from '../sushi-header/sushi-header.module';
import { SushiListModule } from './sushi-list/sushi-list.module';
import { SushiFormModule } from '../sushi-form/sushi-form.module';

@NgModule({
  declarations: [SushiPageComponent],
  imports: [
    CommonModule,
    SushiHeaderModule,
    SushiListModule,
    SushiFormModule,
  ],
  exports: [SushiPageComponent],
})
export class SushiPageModule {}
