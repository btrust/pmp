import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsnGeneralComponent } from './msn-general.component';

describe('MsnGeneralComponent', () => {
  let component: MsnGeneralComponent;
  let fixture: ComponentFixture<MsnGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsnGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsnGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
