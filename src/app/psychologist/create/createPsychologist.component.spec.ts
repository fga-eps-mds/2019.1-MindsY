import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePsychologistComponent } from './create.component';

describe('CreatePsychologistComponent', () => {
  let component: CreatePsychologistComponent;
  let fixture: ComponentFixture<CreatePsychologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePsychologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePsychologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
