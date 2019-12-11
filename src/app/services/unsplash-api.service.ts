import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan, tap } from 'rxjs/operators';
import {UNSPLASH_URL, UNSPLASH_CLIENT_ID, IMAGES_PER_PAGE, IMAGES_ORIENTATION} from '../constans';
import { UnsplashApiResponse } from '../models/unsplash-api-response';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class UnsplashApiService {
  constructor(private http: HttpClient) { }

  getImages$(query = ''): Observable<UnsplashApiResponse> {
    const params = new HttpParams()
      .set('query', query)
      .set('per_page', IMAGES_PER_PAGE)
      .set('client_id', UNSPLASH_CLIENT_ID)
      .set('orientation', IMAGES_ORIENTATION);

    return this.http.get<UnsplashApiResponse>(UNSPLASH_URL, {params})
            .pipe(
              map(reponse => {
                console.log(reponse);
                return {
                  results: this.reduceData(reponse.results),
                  total: reponse.total,
                  total_pages: reponse.total_pages
                };
              })
            );
  }

  reduceData(images: any[]): Image[] {
    return images.map(info => ({
            thumbUrl: info.urls.thumb,
            downloadUrl: info.links.download,
            author: {
              name: `${info.user.first_name} ${info.user.last_name ? info.user.last_name : ''}`,
              link: info.user.portfolio_url
            }
          }));
  }
}
