import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsnItineraryComponent } from './msn-itinerary.component';

describe('MsnItineraryComponent', () => {
  let component: MsnItineraryComponent;
  let fixture: ComponentFixture<MsnItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsnItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsnItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
