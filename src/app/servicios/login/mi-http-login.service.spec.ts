import { TestBed, inject } from '@angular/core/testing';

import { MiHttpLoginService } from './mi-http-login.service';

describe('MiHttpLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiHttpLoginService]
    });
  });

  it('should be created', inject([MiHttpLoginService], (service: MiHttpLoginService) => {
    expect(service).toBeTruthy();
  }));
});
