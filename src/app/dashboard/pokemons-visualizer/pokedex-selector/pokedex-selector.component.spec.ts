import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexSelectorComponent } from './pokedex-selector.component';

describe('PokedexSelectorComponent', () => {
  let component: PokedexSelectorComponent;
  let fixture: ComponentFixture<PokedexSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
