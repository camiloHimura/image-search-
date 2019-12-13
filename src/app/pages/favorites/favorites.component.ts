import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ModalState } from 'src/app/models/modal.state';
import { FavoriteListItem } from 'src/app/models/favoriteListItem';
import * as ModalActions from '../../store/actions/Modals.actions';
import { UPDATE_FAVORITE } from 'src/app/constans';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  showNewFavorite = false;
  favoritesStore$: Observable<{}>;
  updateFavorite = UPDATE_FAVORITE;
  modalsStore$: Observable<ModalState>;
  favorites: FavoriteListItem | any[] = [];
  favoriteSelected: FavoriteListItem;

  constructor(private store: Store<any>) {
    this.modalsStore$ = store.pipe(select('modals'));
    this.favoritesStore$ = store.pipe(select('favorites'));
  }

  ngOnInit() {
    this.listenModals();
    this.listenfavorites();
  }

  listenfavorites() {
    this.favoritesStore$.subscribe((info) => {
      this.favorites = Object.entries(info).map(([id, data]: [string, FavoriteListItem]) => ({id, ...data}));
      });
  }

  listenModals() {
    this.modalsStore$.subscribe((info: ModalState) => {
        this.showNewFavorite = info.showNewFavorite;
      });
  }

  edit(id, name, description) {
    this.favoriteSelected = {id, name, description};
    console.log('this.favoriteSelected', this.favoriteSelected);
    this.store.dispatch(ModalActions.toggleNewFavorite({payload: true}));
  }
}
