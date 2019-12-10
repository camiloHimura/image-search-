import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ImgCardComponent } from './components/img-card/img-card.component';
import { ButtonComponent } from './components/button/button.component';
import { DownloadComponent } from './components/download/download.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { DownloadCardComponent } from './components/download-card/download-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { ModalFavoritesListComponent } from './components/modal-favorites-list/modal-favorites-list.component';
import { ModalNewFavoriteComponent } from './components/modal-new-favorite/modal-new-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    MenuComponent,
    SearchBarComponent,
    ImgCardComponent,
    ButtonComponent,
    DownloadComponent,
    ThumbnailComponent,
    DownloadCardComponent,
    ModalComponent,
    InputRadioComponent,
    ModalFavoritesListComponent,
    ModalNewFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
