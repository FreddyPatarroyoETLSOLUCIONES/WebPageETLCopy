import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleServiceComponent } from './title-service.component';

describe('TitleServiceComponent', () => {
  let component: TitleServiceComponent;
  let fixture: ComponentFixture<TitleServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
