import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentVisitorsChartComponent } from './tournament-visitors-chart.component';

describe('TournamentVisitorsChartComponent', () => {
  let component: TournamentVisitorsChartComponent;
  let fixture: ComponentFixture<TournamentVisitorsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentVisitorsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentVisitorsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
