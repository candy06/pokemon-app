import { TestBed } from '@angular/core/testing';

import { PokemonsTeamService } from './pokemons-team.service';

describe('PokemonsTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonsTeamService = TestBed.get(PokemonsTeamService);
    expect(service).toBeTruthy();
  });
});
