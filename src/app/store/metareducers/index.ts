import { MetaReducer, ActionReducer } from '@ngrx/store';

import managerLS from '../../util/managerLS.util';
import * as FavoriteActions from '../actions/Favorites.actions';
import { LS_FAVORITES_KEY } from 'src/app/constans';

export function saveLocalStorage(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action: {type: string, payload: any}) {

    if (FavoriteActions.createFavoriteItem.type === action.type) {
      const {name, description, images} = action.payload;
      const newFavorites = Object.assign({}, state.favorites, {[name]: {description, images}});
      managerLS.save(LS_FAVORITES_KEY, JSON.stringify(newFavorites));
    }

    if (FavoriteActions.addImageToFavorite.type === action.type) {
      const oldData = state.favorites[action.payload.listName];
      if (oldData) {
        const newImages = [...oldData.images, action.payload.image];
        const newData = {...oldData, images: newImages};
        managerLS.save(LS_FAVORITES_KEY, JSON.stringify({ ...state.favorites, [action.payload.listName]: newData }));
      }
    }

    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<any>[] = [saveLocalStorage];
