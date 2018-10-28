import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAbilitiesDetailsComponent } from './pokemon-abilities-details.component';

describe('PokemonAbilitiesDetailsComponent', () => {
  let component: PokemonAbilitiesDetailsComponent;
  let fixture: ComponentFixture<PokemonAbilitiesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonAbilitiesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAbilitiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
