import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAutomationServiceComponent } from './process-automation-service.component';

describe('ProcessAutomationServiceComponent', () => {
  let component: ProcessAutomationServiceComponent;
  let fixture: ComponentFixture<ProcessAutomationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessAutomationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAutomationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
