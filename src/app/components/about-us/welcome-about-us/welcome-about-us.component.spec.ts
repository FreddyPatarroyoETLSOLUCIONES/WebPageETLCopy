import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAboutUsComponent } from './welcome-about-us.component';

describe('WelcomeAboutUsComponent', () => {
  let component: WelcomeAboutUsComponent;
  let fixture: ComponentFixture<WelcomeAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
