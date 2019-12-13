import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { Image } from 'src/app/models/image';

import { ModalState } from 'src/app/models/modal.state';
import * as ModalActions from '../../store/actions/Modals.actions';
import * as FavoritesActions from '../../store/actions/Favorites.actions';
import { FavoriteListItem } from 'src/app/models/favoriteListItem';


@Component({
  selector: 'app-modal-favorites-list',
  templateUrl: './modal-favorites-list.component.html',
  styleUrls: ['./modal-favorites-list.component.scss']
})
export class ModalFavoritesListComponent implements OnInit {
  favorites = [];
  favoritesStore$: Observable<{}>;
  modalsStore$: Observable<ModalState>;
  @Input() selectedImage: Image;

  constructor(private store: Store<any>) {
    this.modalsStore$ = store.pipe(select('modals'));
    this.favoritesStore$ = store.pipe(select('favorites'));
  }

  ngOnInit() {
    this.listenfavorites();
  }

  closeModal() {
    this.store.dispatch(ModalActions.toggleFavoritesList({payload: false}));
  }

  listenfavorites() {
    this.favoritesStore$.subscribe((info) => {
      this.favorites = Object.entries(info).map(([id, data]: [string, FavoriteListItem]) => ({id, ...data}));
      });
  }

  newItemList() {
    this.store.dispatch(ModalActions.toggleNewFavorite({payload: true}));
    this.store.dispatch(ModalActions.toggleFavoritesList({payload: false}));
  }

  onSubmit(ngForm: NgForm) {
    const image = this.selectedImage;
    const listName = ngForm.value.list;
    this.store.dispatch(FavoritesActions.addImageToFavorite({payload: {listName, image }}));

    this.store.dispatch(ModalActions.toggleFavoritesList({payload: false}));
  }
}
