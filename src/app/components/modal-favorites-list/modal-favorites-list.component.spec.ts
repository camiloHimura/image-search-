import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFavoritesListComponent } from './modal-favorites-list.component';

describe('ModalFavoritesListComponent', () => {
  let component: ModalFavoritesListComponent;
  let fixture: ComponentFixture<ModalFavoritesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFavoritesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFavoritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
