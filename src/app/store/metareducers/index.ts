import { MetaReducer, ActionReducer } from '@ngrx/store';

import managerLS from '../../util/managerLS.util';
import * as FavoriteActions from '../actions/Favorites.actions';
import { LS_FAVORITES_KEY } from 'src/app/constans';
import { newFavorite, updateFavorite, addImageToFavorite } from 'src/app/util/favorites.util';

export function saveLocalStorage(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action: {type: string, payload: any}) {

    if (FavoriteActions.createFavoriteItem.type === action.type) {
      const newData = JSON.stringify(newFavorite(state.favorites, action.payload))
      managerLS.save(LS_FAVORITES_KEY, newData);
    }

    if (FavoriteActions.updatedFavoriteItem.type === action.type) {
      const newData = JSON.stringify(updateFavorite(state.favorites, action.payload));
      managerLS.save(LS_FAVORITES_KEY, newData);
    }

    if (FavoriteActions.addImageToFavorite.type === action.type) {
      const newData = JSON.stringify(addImageToFavorite(state.favorites, action.payload));
      managerLS.save(LS_FAVORITES_KEY, newData);
    }

    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<any>[] = [saveLocalStorage];
