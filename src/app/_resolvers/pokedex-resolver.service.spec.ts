import { TestBed } from '@angular/core/testing';

import { PokedexResolver } from './pokedex-resolver.service';

describe('PokedexResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokedexResolver = TestBed.get(PokedexResolver);
    expect(service).toBeTruthy();
  });
});
