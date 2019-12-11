
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { UnsplashApiService } from 'src/app/services/unsplash-api.service';
import * as ImageActions from '../actions/Images.actions';

@Injectable()
export class ImagesEffects {
  constructor(private unsplashApiService: UnsplashApiService, private actions$: Actions) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImageActions.load),
      mergeMap(info =>
        this.unsplashApiService.getImages$(info.payload)
          .pipe(
            map(response => ImageActions.loaded({ payload: response.results })),
            catchError(error => of(ImageActions.error({ payload: error})))
          )
      )
    )
  );
}
