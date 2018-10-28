import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatsDetailsComponent } from './pokemon-stats-details.component';

describe('PokemonStatsDetailsComponent', () => {
  let component: PokemonStatsDetailsComponent;
  let fixture: ComponentFixture<PokemonStatsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonStatsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonStatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
