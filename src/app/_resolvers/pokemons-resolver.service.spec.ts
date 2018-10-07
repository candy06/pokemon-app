import { TestBed } from '@angular/core/testing';

import { PokemonsResolver } from './pokemons-resolver.service';

describe('PokemonsResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonsResolver = TestBed.get(PokemonsResolver);
    expect(service).toBeTruthy();
  });
});
