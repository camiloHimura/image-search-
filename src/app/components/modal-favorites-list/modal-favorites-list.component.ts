import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ModalState } from 'src/app/models/modal.state';
import * as ModalActions from '../../store/actions/Modals.actions';

@Component({
  selector: 'app-modal-favorites-list',
  templateUrl: './modal-favorites-list.component.html',
  styleUrls: ['./modal-favorites-list.component.scss']
})
export class ModalFavoritesListComponent implements OnInit {
  favorites = [];
  favoritesStore$: Observable<{}>;
  modalsStore$: Observable<ModalState>;

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
      this.favorites = Object.entries(info);
      });
  }

  newItemList() {
    this.store.dispatch(ModalActions.toggleNewFavorite({payload: true}));
    this.store.dispatch(ModalActions.toggleFavoritesList({payload: false}));
  }

}
