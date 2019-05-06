import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StellartabComponent } from './stellartab.component';

describe('StellartabComponent', () => {
  let component: StellartabComponent;
  let fixture: ComponentFixture<StellartabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StellartabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StellartabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
