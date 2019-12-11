import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

import { UnsplashApiService } from 'src/app/services/unsplash-api.service';

import { Image } from 'src/app/models/image';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { filter, debounceTime, distinctUntilChanged, tap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('searchBar', {static: false}) searchBar: SearchBarComponent;

  images: Image[] = [];

  constructor(private unsplashApiService: UnsplashApiService) { }

  ngOnInit() {
    this.unsplashApiService.getImages$('all')
      .subscribe(info => this.images = info.results);
  }

   ngAfterViewInit() {
    fromEvent(this.searchBar.element.nativeElement, 'keyup')
      .pipe(
          filter(Boolean),
          debounceTime(200),
          distinctUntilChanged(),
          map((event: any) => event.target.value),
          switchMap(text => this.unsplashApiService.getImages$(text)),
      )
      .subscribe(info => this.images = info.results);
  }



}
