import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpacientComponent } from './edit.component';

describe('EditpacientComponent', () => {
  let component: EditpacientComponent;
  let fixture: ComponentFixture<EditpacientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpacientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
