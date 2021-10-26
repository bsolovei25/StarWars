import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilterBoxComponent } from './app-filter-box.component';

describe('AppFilterBoxComponent', () => {
  let component: AppFilterBoxComponent;
  let fixture: ComponentFixture<AppFilterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFilterBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
