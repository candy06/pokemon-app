import { TestBed } from '@angular/core/testing';

import { SpectatorService } from './spectator.service';

describe('SpectatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpectatorService = TestBed.get(SpectatorService);
    expect(service).toBeTruthy();
  });
});
