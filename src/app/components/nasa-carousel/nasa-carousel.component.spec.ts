import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaCarousel } from './nasa-carousel.component';

describe('NasaCarousel', () => {
  let component: NasaCarousel;
  let fixture: ComponentFixture<NasaCarousel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaCarousel ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
