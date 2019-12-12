import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import * as ImagesActions from '../../store/actions/Images.actions';
import * as ModalActions from '../../store/actions/Modals.actions';

import { Image } from 'src/app/models/image';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { filter, debounceTime, distinctUntilChanged, tap, map, switchMap } from 'rxjs/operators';
import { ModalState } from 'src/app/models/modal.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('searchBar', {static: false}) searchBar: SearchBarComponent;

  images: Image[];
  favorites = {};
  numFavorites = 0;
  loadingImages = true;
  showNewFavorite = false;
  showFavoriteList = false;
  favoritesStore$: Observable<{}>;
  imagesStore$: Observable<Image[]>;
  modalsStore$: Observable<ModalState>;

  constructor(private store: Store<any>) {
    this.imagesStore$ = store.pipe(select('images'));
    this.modalsStore$ = store.pipe(select('modals'));
    this.favoritesStore$ = store.pipe(select('favorites'));
  }

  ngOnInit() {
    this.listenImages();
    this.listenModals();
    this.listenfavorites();
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
      .subscribe();
  }

  listenImages() {
    this.imagesStore$.subscribe((info: any) => {
        this.images = info.images;
        this.loadingImages = info.loading;
      });
  }

  listenModals() {
    this.modalsStore$.subscribe((info: ModalState) => {
        this.showNewFavorite = info.showNewFavorite;
        this.showFavoriteList = info.showFavoriteList;
      });
  }

  listenfavorites() {
    this.favoritesStore$.subscribe((info) => {
        console.log('info favorites', info);
        this.favorites = info;
        this.numFavorites = Object.keys(info).length;
      });
  }

  saveFavorite(image: Image) {
    console.log('saveFavorite', image);
    if (this.numFavorites > 0) {
      this.store.dispatch(ModalActions.toggleFavoritesList({payload: true}));
    } else {
      this.store.dispatch(ModalActions.toggleNewFavorite({payload: true}));
    }
  }

}
