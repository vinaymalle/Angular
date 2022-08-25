import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatviFormsComponent } from './reatvi-forms.component';

describe('ReatviFormsComponent', () => {
  let component: ReatviFormsComponent;
  let fixture: ComponentFixture<ReatviFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReatviFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReatviFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
