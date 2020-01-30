import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautOverviewComponent } from './astronaut-overview.component';

describe('AstronautOverviewComponent', () => {
  let component: AstronautOverviewComponent;
  let fixture: ComponentFixture<AstronautOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronautOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronautOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
