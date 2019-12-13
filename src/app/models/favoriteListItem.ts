import { Image } from './image';

export interface FavoriteListItem {
  id?: string;
  name: string;
  description: string;
  images?: Image[] | [];
}
