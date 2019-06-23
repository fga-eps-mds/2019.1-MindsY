import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  beforeEach((async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  })));

  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  });
});
