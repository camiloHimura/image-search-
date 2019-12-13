import { createReducer, on, Action } from '@ngrx/store';

import managerLS from '../../util/managerLS.util';
import { LS_FAVORITES_KEY } from 'src/app/constans';
import * as FavoriteActions from '../actions/Favorites.actions';
import { newFavorite, updateFavorite, addImageToFavorite } from 'src/app/util/favorites.util';

export const initialState = {...managerLS.get(LS_FAVORITES_KEY)};

const reducer = createReducer(initialState,
  on(FavoriteActions.createFavoriteItem, (state, { payload })  => {
    return newFavorite(state, payload);
  }),
  on(FavoriteActions.updatedFavoriteItem, (state, { payload })  => {
    return updateFavorite(state, payload);
  }),
  on(FavoriteActions.addImageToFavorite, (state, { payload })  => {
    return addImageToFavorite(state, payload);
  })
);

export function favoritesReducer(state: {} | undefined, action: Action) {
  return reducer(state, action);
}
