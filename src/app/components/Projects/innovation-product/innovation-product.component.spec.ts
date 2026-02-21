import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationProductComponent } from './innovation-product.component';

describe('InnovationProductComponent', () => {
  let component: InnovationProductComponent;
  let fixture: ComponentFixture<InnovationProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovationProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
