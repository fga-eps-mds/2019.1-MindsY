import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePsychologistComponent } from './createPsychologist.component';
import { UserService } from 'src/app/services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('CreatePsychologistComponent', () => {
  let component: CreatePsychologistComponent;
  let fixture: ComponentFixture<CreatePsychologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePsychologistComponent ],
      imports: [ HttpClientModule, FormsModule ],
      providers: [ UserService ]
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
