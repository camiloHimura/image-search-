import { createReducer, on, Action } from '@ngrx/store';

import managerLS from '../../util/managerLS.util';
import { LS_FAVORITES_KEY } from 'src/app/constans';
import * as FavoriteActions from '../actions/Favorites.actions';

export const initialState = {...managerLS.get(LS_FAVORITES_KEY)};

const reducer = createReducer(initialState,
  on(FavoriteActions.createFavoriteItem, (state, { payload })  => {
    if (!state[payload.name]) {
      const {name, description, images} = payload;
      return { ...state, [name]: {description, images}};
    }
    return { ...state };
  }),
  on(FavoriteActions.addImageToFavorite, (state, { payload })  => {
    const oldData = state[payload.listName];
    if (oldData) {
      const newImages = [...oldData.images, payload.image];
      const newData = {...oldData, images: newImages};
      return { ...state, [payload.listName]: newData };
    }

    return { ...state };
  })
);

export function favoritesReducer(state: {} | undefined, action: Action) {
  return reducer(state, action);
}
