import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessIntelligenceProductComponent } from './business-intelligence-product.component';

describe('BusinessIntelligenceProductComponent', () => {
  let component: BusinessIntelligenceProductComponent;
  let fixture: ComponentFixture<BusinessIntelligenceProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessIntelligenceProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessIntelligenceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
