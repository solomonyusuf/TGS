import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniourResultComponent } from './juniour-result.component';

describe('JuniourResultComponent', () => {
  let component: JuniourResultComponent;
  let fixture: ComponentFixture<JuniourResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniourResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniourResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
