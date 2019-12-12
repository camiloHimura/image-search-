import { createReducer, on, Action } from '@ngrx/store';
import * as FavoriteActions from '../actions/Favorites.actions';

export const initialState = {};

const reducer = createReducer(initialState,
  on(FavoriteActions.createFavoriteItem, (state, { payload })  => {
    if (!state[payload.name]) {
      const {name, description, images} = payload;
      return { ...state, [name]: {description, images}};
    }
    return { ...state };
  }),
  on(FavoriteActions.addImageToFavorite, (state, { payload })  => {
    const oldData = state[payload.name];
    if (oldData) {
      const newImages = [...oldData.images, payload.image];
      const newData = {...oldData, images: newImages};
      return { ...state, [payload.name]: newData };
    }

    return { ...state };
  })
);

export function favoritesReducer(state: {} | undefined, action: Action) {
  return reducer(state, action);
}
