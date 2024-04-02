import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
  /*  {
     path: '',
     component: HomePageComponent //TODO:localhost:4200/
   } */
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(t => t.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then(f => f.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(h => h.HistoryModule)
  }/* , {
    path: '**',//TODO Redirige si no existe
    redirectTo: '/tracks'
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
