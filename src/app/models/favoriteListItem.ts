import { Image } from './image';

export interface FavoriteListItem {
  name: string;
  description: string;
  images: Image[] | [];
}
