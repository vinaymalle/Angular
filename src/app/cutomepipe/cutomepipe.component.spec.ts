import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomepipeComponent } from './cutomepipe.component';

describe('CutomepipeComponent', () => {
  let component: CutomepipeComponent;
  let fixture: ComponentFixture<CutomepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomepipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
