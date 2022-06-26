import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniourResultComponent } from './seniour-result.component';

describe('SeniourResultComponent', () => {
  let component: SeniourResultComponent;
  let fixture: ComponentFixture<SeniourResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniourResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniourResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
