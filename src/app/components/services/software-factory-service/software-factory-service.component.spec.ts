import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareFactoryServiceComponent } from './software-factory-service.component';

describe('SoftwareFactoryServiceComponent', () => {
  let component: SoftwareFactoryServiceComponent;
  let fixture: ComponentFixture<SoftwareFactoryServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareFactoryServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareFactoryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
