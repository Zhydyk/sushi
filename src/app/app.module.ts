import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SushiPageModule } from './sushi-page/sushi-page.module';
import { SushiHeaderModule } from './sushi-header/sushi-header.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { SushiFormModule } from './sushi-form/sushi-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SushiPageModule,
    SushiHeaderModule,
    MatSliderModule,
    MatTableModule,
    SushiFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
