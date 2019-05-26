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

  it('test userService.createUser have been called', () => {
    
    const userService = fixture.debugElement.injector.get(UserService);
    const spyAuth = spyOn(userService, 'createUser').and.callThrough();
    component.register();
    fixture.detectChanges();
    expect(userService.createUser).toHaveBeenCalled();
  });

});
