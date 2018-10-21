import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsTournamentStatsComponent } from './pokemons-tournament-stats.component';

describe('PokemonsTournamentStatsComponent', () => {
  let component: PokemonsTournamentStatsComponent;
  let fixture: ComponentFixture<PokemonsTournamentStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsTournamentStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsTournamentStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
