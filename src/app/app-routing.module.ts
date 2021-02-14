import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SushiFormComponent } from './sushi-form/sushi-form.component';
import { SushiPageComponent } from './sushi-page/sushi-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/sushi', pathMatch: 'full' },
  { path: 'sushi', component: SushiPageComponent },
  { path: 'new-order', component: SushiFormComponent, pathMatch:'full' },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
