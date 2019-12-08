import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FavoritesComponent } from '../pages/favorites/favorites.component';
/* import { DetailComponent } from '../pages/detail/detail.component';
import { CompareComponent } from '../pages/compare/compare.component';
import { CarsDetailsResolveService } from '../services/cars-details-resolve.service';
import { CarsDataResolveService } from '../services/cars-data-resolve.service'; */

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /* { path: 'home', component: HomeComponent, resolve: { data: CarsDataResolveService}}, */
  { path: 'home', component: HomeComponent},
  { path: 'favorites', component: FavoritesComponent},
  /* { path: 'detail/:id', component: DetailComponent, resolve: { data: CarsDetailsResolveService}},
  { path: 'compare', component: CompareComponent, resolve: { data: CarsDataResolveService}}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
