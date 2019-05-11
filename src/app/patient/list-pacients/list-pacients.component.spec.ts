import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPacientsComponent } from './list-pacients.component';

describe('ListPacientsComponent', () => {
  let component: ListPacientsComponent;
  let fixture: ComponentFixture<ListPacientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPacientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPacientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
