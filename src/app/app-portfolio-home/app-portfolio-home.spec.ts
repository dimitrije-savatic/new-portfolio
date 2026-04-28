import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHomeComponent } from './app-portfolio-home';

describe('AppPortfolioHome', () => {
  let component: PortfolioHomeComponent;
  let fixture: ComponentFixture<PortfolioHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioHomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
