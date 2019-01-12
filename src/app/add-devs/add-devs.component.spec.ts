import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevsComponent } from './add-devs.component';

describe('AddDevsComponent', () => {
  let component: AddDevsComponent;
  let fixture: ComponentFixture<AddDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
