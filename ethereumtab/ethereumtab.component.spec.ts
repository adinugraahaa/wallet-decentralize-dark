import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthereumtabComponent } from './ethereumtab.component';

describe('EthereumtabComponent', () => {
  let component: EthereumtabComponent;
  let fixture: ComponentFixture<EthereumtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthereumtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthereumtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
