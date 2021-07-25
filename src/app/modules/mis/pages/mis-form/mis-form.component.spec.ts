import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisFormComponent } from './mis-form.component';

describe('MisFormComponent', () => {
  let component: MisFormComponent;
  let fixture: ComponentFixture<MisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
