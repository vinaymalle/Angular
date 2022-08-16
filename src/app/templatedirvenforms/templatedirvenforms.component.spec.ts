import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedirvenformsComponent } from './templatedirvenforms.component';

describe('TemplatedirvenformsComponent', () => {
  let component: TemplatedirvenformsComponent;
  let fixture: ComponentFixture<TemplatedirvenformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedirvenformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedirvenformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
