import { TestBed } from '@angular/core/testing';

import { HueHttpServiceService } from './hue-http-service.service';

describe('HueHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HueHttpServiceService = TestBed.get(HueHttpServiceService);
    expect(service).toBeTruthy();
  });
});
