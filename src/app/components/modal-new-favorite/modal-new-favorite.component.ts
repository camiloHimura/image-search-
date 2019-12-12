import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgForm, FormControl, NgModel } from '@angular/forms';

import { ModalState } from 'src/app/models/modal.state';
import * as ModalActions from '../../store/actions/Modals.actions';
import * as FavoritesActions from '../../store/actions/Favorites.actions';

@Component({
  selector: 'app-modal-new-favorite',
  templateUrl: './modal-new-favorite.component.html',
  styleUrls: ['./modal-new-favorite.component.scss']
})
export class ModalNewFavoriteComponent implements OnInit {
  modalsStore$: Observable<ModalState>;

  constructor(private store: Store<any>) {
    this.modalsStore$ = store.pipe(select('modals'));
  }

  ngOnInit() {
  }

  closeModal() {
    this.store.dispatch(ModalActions.toggleNewFavorite({payload: false}));
  }

  onSubmit(ngForm: NgForm, name: NgModel, description: NgModel): void {

    if (ngForm.status === 'VALID') {
      console.log('Saving...', name.value, description.value);
      console.log(name);
      console.log(description);
      const data = {name: name.value, description: description.value, images: []};
      this.store.dispatch(FavoritesActions.createFavoriteItem({payload: data}));
      this.store.dispatch(ModalActions.toggleNewFavorite({payload: false}));
      this.store.dispatch(ModalActions.toggleFavoritesList({payload: true}));

      /* name.setValue('');
      description.setValue(''); */
    }
  }
}
