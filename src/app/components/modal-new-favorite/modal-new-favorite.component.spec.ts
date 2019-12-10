import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewFavoriteComponent } from './modal-new-favorite.component';

describe('ModalNewFavoriteComponent', () => {
  let component: ModalNewFavoriteComponent;
  let fixture: ComponentFixture<ModalNewFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
