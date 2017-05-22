import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsnAircrewComponent } from './msn-aircrew.component';

describe('MsnAircrewComponent', () => {
  let component: MsnAircrewComponent;
  let fixture: ComponentFixture<MsnAircrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsnAircrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsnAircrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
