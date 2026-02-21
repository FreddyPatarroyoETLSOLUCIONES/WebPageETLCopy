import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoValuesComponent } from './info-values.component';

describe('InfoValuesComponent', () => {
  let component: InfoValuesComponent;
  let fixture: ComponentFixture<InfoValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
