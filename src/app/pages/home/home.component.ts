import { Component, OnInit } from '@angular/core';
import { UnsplashApiService } from 'src/app/services/unsplash-api.service';
import { Observable } from 'rxjs';
import { UnsplashApiResponse } from 'src/app/models/unsplash-api-response';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: Image[] = [];

  constructor(private unsplashApiService: UnsplashApiService) { }

  ngOnInit() {
    this.unsplashApiService.getImages$()
      .subscribe(info => {
        this.images = info.results;
      });
  }

}
