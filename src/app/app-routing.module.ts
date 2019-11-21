import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './pages/films/films.component';
import { FilmComponent } from './pages/film/film.component';


const routes: Routes = [
  { path: '', redirectTo: '/filmes', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent },
  { path: 'films/:id', component: FilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
