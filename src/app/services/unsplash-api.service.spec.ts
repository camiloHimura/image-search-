import { TestBed } from '@angular/core/testing';

import { UnsplashApiService } from './unsplash-api.service';

describe('UnsplashApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnsplashApiService = TestBed.get(UnsplashApiService);
    expect(service).toBeTruthy();
  });
});
