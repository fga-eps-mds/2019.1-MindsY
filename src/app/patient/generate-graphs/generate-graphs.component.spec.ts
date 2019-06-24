import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateGraphsComponent } from './generate-graphs.component';

describe('GenerateGraphsComponent', () => {
  let component: GenerateGraphsComponent;
  let fixture: ComponentFixture<GenerateGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
