import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcointabComponent } from './bitcointab.component';

describe('BitcointabComponent', () => {
  let component: BitcointabComponent;
  let fixture: ComponentFixture<BitcointabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcointabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcointabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
