import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPacientComponent } from './edit.component';
import { PatientService } from 'src/app/services';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditPacientComponent', () => {
  let component: EditPacientComponent;
  let fixture: ComponentFixture<EditPacientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPacientComponent ],
      imports: [HttpClientModule, FormsModule, TextMaskModule, RouterTestingModule],
      providers: [
        PatientService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
