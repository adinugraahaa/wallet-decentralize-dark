import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdttabComponent } from './usdttab.component';

describe('UsdttabComponent', () => {
  let component: UsdttabComponent;
  let fixture: ComponentFixture<UsdttabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdttabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
