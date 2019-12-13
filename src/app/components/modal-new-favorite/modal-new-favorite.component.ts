import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgForm, NgModel } from '@angular/forms';

import { ModalState } from 'src/app/models/modal.state';
import * as ModalActions from '../../store/actions/Modals.actions';
import * as FavoritesActions from '../../store/actions/Favorites.actions';
import { SAVE_FAVORITE, UPDATE_FAVORITE } from 'src/app/constans';

@Component({
  selector: 'app-modal-new-favorite',
  templateUrl: './modal-new-favorite.component.html',
  styleUrls: ['./modal-new-favorite.component.scss']
})
export class ModalNewFavoriteComponent implements OnInit {
  @Input() type = SAVE_FAVORITE;
  @Input() favoriteSelected: {name: string, description: string};
  item = {name: '', description: ''};
  modalsStore$: Observable<ModalState>;

  constructor(private store: Store<any>) {
    this.modalsStore$ = store.pipe(select('modals'));
  }

  ngOnInit() {
    if (this.type === UPDATE_FAVORITE) {
      this.item = this.favoriteSelected;
    }
  }

  closeModal() {
    this.store.dispatch(ModalActions.toggleNewFavorite({payload: false}));
  }

  onSubmit(ngForm: NgForm): void {
    if (ngForm.status === 'VALID' && this.type === SAVE_FAVORITE) {
      const data = {name: this.item.name, description: this.item.description, images: []};
      this.store.dispatch(FavoritesActions.createFavoriteItem({payload: data}));
      this.store.dispatch(ModalActions.toggleNewFavorite({payload: false}));
      this.store.dispatch(ModalActions.toggleFavoritesList({payload: true}));
    }

    if (ngForm.status === 'VALID' && this.type === UPDATE_FAVORITE) {
      this.store.dispatch(FavoritesActions.updatedFavoriteItem({payload: {...this.favoriteSelected}}));
      this.store.dispatch(ModalActions.toggleNewFavorite({payload: false}));
    }
  }
}
