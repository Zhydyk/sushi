import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SushiPageComponent } from './sushi-page/sushi-page.component';

const routes: Routes = [
  { path: 'sushi', component: SushiPageComponent },
  { path: '', redirectTo: '/sushi', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
