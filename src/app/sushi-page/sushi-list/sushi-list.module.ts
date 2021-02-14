import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SushiListComponent } from './sushi-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [SushiListComponent],
  imports: [CommonModule, MatTableModule],
  exports: [SushiListComponent],
})
export class SushiListModule {}
