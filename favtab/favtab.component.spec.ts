import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavtabComponent } from './favtab.component';

describe('FavtabComponent', () => {
  let component: FavtabComponent;
  let fixture: ComponentFixture<FavtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
