import { TestBed } from '@angular/core/testing';

import { CheckguardGuard } from './checkguard.guard';

describe('CheckguardGuard', () => {
  let guard: CheckguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
