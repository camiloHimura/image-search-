import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { BalanceComponent } from './pages/balance/balance.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

import { imagesReducer } from './store/reducers/Images.reducer';
import { ImagesEffects } from './store/effects/images.effect';
import { modalsReducer } from './store/reducers/Modals.reducer';
import { favoritesReducer } from './store/reducers/Favorites.reducer';
import { metaReducers } from './store/metareducers';

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
    ModalNewFavoriteComponent,
    BalanceComponent,
    TransactionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([ImagesEffects]),
    StoreModule.forRoot({ images: imagesReducer,
                          modals: modalsReducer,
                          favorites: favoritesReducer
                        },
                        { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
