import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBoxesGridComponent } from './app-boxes-grid.component';

describe('AppBoxesGridComponent', () => {
  let component: AppBoxesGridComponent;
  let fixture: ComponentFixture<AppBoxesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBoxesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBoxesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
