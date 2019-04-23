import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEditprofileComponent } from './section-editprofile.component';

describe('SectionEditprofileComponent', () => {
  let component: SectionEditprofileComponent;
  let fixture: ComponentFixture<SectionEditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
