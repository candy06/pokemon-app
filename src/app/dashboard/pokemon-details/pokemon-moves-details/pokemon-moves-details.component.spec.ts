import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMovesDetailsComponent } from './pokemon-moves-details.component';

describe('PokemonMovesDetailsComponent', () => {
  let component: PokemonMovesDetailsComponent;
  let fixture: ComponentFixture<PokemonMovesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonMovesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMovesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
