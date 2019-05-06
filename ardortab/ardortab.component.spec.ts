import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdortabComponent } from './ardortab.component';

describe('ArdortabComponent', () => {
  let component: ArdortabComponent;
  let fixture: ComponentFixture<ArdortabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArdortabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdortabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
