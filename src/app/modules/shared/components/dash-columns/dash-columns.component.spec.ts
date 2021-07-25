import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashColumnsComponent } from './dash-columns.component';

describe('DashColumnsComponent', () => {
  let component: DashColumnsComponent;
  let fixture: ComponentFixture<DashColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
