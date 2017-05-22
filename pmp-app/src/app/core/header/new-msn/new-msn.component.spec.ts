import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMsnComponent } from './new-msn.component';

describe('MsnNewComponent', () => {
  let component: NewMsnComponent;
  let fixture: ComponentFixture<NewMsnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMsnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
