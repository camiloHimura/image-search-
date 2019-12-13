import { createAction, props } from '@ngrx/store';
import { FavoriteListItem } from 'src/app/models/favoriteListItem';
import { Image } from 'src/app/models/image';

export const createFavoriteItem = createAction('[Favorites] Create Favorite Item', props<{ payload: FavoriteListItem }>());
export const addImageToFavorite = createAction('[Favorites] Add Image to Favorite Item', props<{ payload: {listName: string, image: Image} }>());

