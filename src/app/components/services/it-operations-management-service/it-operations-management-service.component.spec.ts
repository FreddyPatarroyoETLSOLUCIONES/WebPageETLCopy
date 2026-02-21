import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItOperationsManagementServiceComponent } from './it-operations-management-service.component';

describe('ItOperationsManagementServiceComponent', () => {
  let component: ItOperationsManagementServiceComponent;
  let fixture: ComponentFixture<ItOperationsManagementServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItOperationsManagementServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItOperationsManagementServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
