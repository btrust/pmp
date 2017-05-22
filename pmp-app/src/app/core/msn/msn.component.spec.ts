import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsnComponent } from './msn.component';

describe('MsnComponent', () => {
  let component: MsnComponent;
  let fixture: ComponentFixture<MsnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
