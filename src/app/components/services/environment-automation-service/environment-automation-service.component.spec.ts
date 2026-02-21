import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentAutomationServiceComponent } from './environment-automation-service.component';

describe('EnvironmentAutomationServiceComponent', () => {
  let component: EnvironmentAutomationServiceComponent;
  let fixture: ComponentFixture<EnvironmentAutomationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentAutomationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentAutomationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
