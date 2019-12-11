import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FavoritesComponent } from '../pages/favorites/favorites.component';
import { BalanceComponent } from '../pages/balance/balance.component';
import { TransactionComponent } from '../pages/transaction/transaction.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'balance', component: BalanceComponent},
  { path: 'transaction', component: TransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
