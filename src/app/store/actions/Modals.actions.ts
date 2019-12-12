import { createAction, props } from '@ngrx/store';

export const toggleFavoritesList = createAction('[Modal] Toogle Favorite List', props<{ payload: boolean }>());
export const toggleNewFavorite = createAction('[Modal] Toogle New Favorite', props<{ payload: boolean }>());

