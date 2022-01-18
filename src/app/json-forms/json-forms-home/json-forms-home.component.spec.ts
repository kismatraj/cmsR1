import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormsHomeComponent } from './json-forms-home.component';

describe('JsonFormsHomeComponent', () => {
  let component: JsonFormsHomeComponent;
  let fixture: ComponentFixture<JsonFormsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFormsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFormsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
