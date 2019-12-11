import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import * as ImagesActions from '../../store/actions/Images.actions';

import { UnsplashApiService } from 'src/app/services/unsplash-api.service';

import { Image } from 'src/app/models/image';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { filter, debounceTime, distinctUntilChanged, tap, map, switchMap } from 'rxjs/operators';
import { ImagesState } from 'src/app/models/images.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('searchBar', {static: false}) searchBar: SearchBarComponent;

  images: Image[];
  loadingImages = true;
  imagesState$: Observable<Image[]>;

  constructor(private store: Store<any>,
              private unsplashApiService: UnsplashApiService
  ) {
    this.imagesState$ = store.pipe(select('imagesState'));
  }

  ngOnInit() {
    this.imagesState$.subscribe((info: any) => {
                        this.images = info.images;
                        this.loadingImages = info.loading;
                      });

    this.store.dispatch(ImagesActions.load({ payload: 'all'}));
  }

   ngAfterViewInit() {
    fromEvent(this.searchBar.element.nativeElement, 'keyup')
      .pipe(
          filter(Boolean),
          debounceTime(200),
          distinctUntilChanged(),
          map((event: any) => event.target.value === '' ? 'all' : event.target.value),
          tap(text => this.store.dispatch(ImagesActions.load({ payload: text})))
      )
      .subscribe(info => this.images = info.results);
  }



}
