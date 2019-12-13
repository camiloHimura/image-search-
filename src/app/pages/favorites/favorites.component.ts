import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FavoriteListItem } from 'src/app/models/favoriteListItem';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: [string, FavoriteListItem][] | [] = [];
  favoritesStore$: Observable<{}>;

  constructor(private store: Store<any>) {
    this.favoritesStore$ = store.pipe(select('favorites'));
  }

  ngOnInit() {
    this.listenfavorites();
  }

  listenfavorites() {
    this.favoritesStore$.subscribe((info) => {
        this.favorites = Object.entries(info);
      });
  }
}
