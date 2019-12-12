import { createReducer, on, Action } from '@ngrx/store';
import * as ModalActions from '../actions/Modals.actions';
import { ModalState } from 'src/app/models/modal.state';

export const initialState = {showFavoriteList: false, showNewFavorite: false};

const reducer = createReducer(initialState,
  on(ModalActions.toggleFavoritesList, (state: ModalState, { payload })  => {
    return { ...state, showFavoriteList: payload};
  }),
  on(ModalActions.toggleNewFavorite, (state: ModalState, { payload })  => {
    return { ...state, showNewFavorite: payload};
  })
);

export function modalsReducer(state: ModalState | undefined, action: Action) {
  return reducer(state, action);
}
