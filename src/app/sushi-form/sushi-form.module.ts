import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SushiFormComponent } from './sushi-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SushiFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [SushiFormComponent],
})
export class SushiFormModule {}
