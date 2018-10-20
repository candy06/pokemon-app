import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsVisualizerComponent } from './pokemons-visualizer.component';

describe('PokemonsVisualizerComponent', () => {
  let component: PokemonsVisualizerComponent;
  let fixture: ComponentFixture<PokemonsVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
