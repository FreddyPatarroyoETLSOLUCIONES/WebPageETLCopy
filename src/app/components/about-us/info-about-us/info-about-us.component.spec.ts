import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAboutUsComponent } from './info-about-us.component';

describe('InfoAboutUsComponent', () => {
  let component: InfoAboutUsComponent;
  let fixture: ComponentFixture<InfoAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
