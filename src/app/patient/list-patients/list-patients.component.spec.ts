import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientsComponent } from './list-patients.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PatientService } from 'src/app/services';

describe('ListPatientsComponent', () => {
  let component: ListPatientsComponent;
  let fixture: ComponentFixture<ListPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPatientsComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [
        PatientService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
