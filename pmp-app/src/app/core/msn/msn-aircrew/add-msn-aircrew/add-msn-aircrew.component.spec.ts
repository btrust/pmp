import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMsnAircrewComponent } from './add-msn-aircrew.component';

describe('AddMsnAircrewComponent', () => {
  let component: AddMsnAircrewComponent;
  let fixture: ComponentFixture<AddMsnAircrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMsnAircrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMsnAircrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
