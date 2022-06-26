import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResultComponent } from './admin-result.component';

describe('AdminResultComponent', () => {
  let component: AdminResultComponent;
  let fixture: ComponentFixture<AdminResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
