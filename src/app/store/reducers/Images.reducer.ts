import { createReducer, on, Action } from '@ngrx/store';
import * as ImagesActions from '../actions/Images.actions';
import { ImagesState } from 'src/app/models/images.state';

export const initialState = {images: [], loading: false, error: false};

const reducer = createReducer(initialState,
  on(ImagesActions.load, (state: ImagesState, { payload })  => {
    return { ...state, loading: true};
  }),
  on(ImagesActions.loaded, (state: ImagesState, { payload })  => {
    return { ...state, images: payload, loading: false, error: false};
  }),
  on(ImagesActions.error, (state: ImagesState, { payload })  => {
    return { ...state, error: true};
  })
);

export function imagesReducer(state: ImagesState | undefined, action: Action) {
  return reducer(state, action);
}
