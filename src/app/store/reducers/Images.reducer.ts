import { createReducer, on, Action } from '@ngrx/store';
import * as ImagesActions from '../actions/Images.actions';
import { ImagesState } from 'src/app/models/images.state';

export const initialState = {images: [], loading: false};

const reducer = createReducer(initialState,
  on(ImagesActions.load, (state: ImagesState, { payload })  => {
    return { ...state, loading: true};
  }),
  on(ImagesActions.loaded, (state: ImagesState, { payload })  => {
    return { ...state, images: payload, loading: false};
  })
);

export function imagesReducer(state: ImagesState | undefined, action: Action) {
  return reducer(state, action);
}
