import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockcComponent } from './stockc.component';

describe('StockcComponent', () => {
  let component: StockcComponent;
  let fixture: ComponentFixture<StockcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
