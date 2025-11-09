/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArmarioService } from './armario.service';

describe('Service: Armario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArmarioService]
    });
  });

  it('should ...', inject([ArmarioService], (service: ArmarioService) => {
    expect(service).toBeTruthy();
  }));
});
