import { Image } from './image';

export interface UnsplashApiResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
