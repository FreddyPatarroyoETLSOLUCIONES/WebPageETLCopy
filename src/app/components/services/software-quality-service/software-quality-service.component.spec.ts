import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareQualityServiceComponent } from './software-quality-service.component';

describe('SoftwareQualityServiceComponent', () => {
  let component: SoftwareQualityServiceComponent;
  let fixture: ComponentFixture<SoftwareQualityServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareQualityServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareQualityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
