import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckProductDetailsGuard } from './check-product-details.guard';

describe('CheckProductDetailsGuard', () => {
  let guard: CheckProductDetailsGuard;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CheckProductDetailsGuard],
    });
    guard = TestBed.inject(CheckProductDetailsGuard);
    route = new ActivatedRouteSnapshot();
    state = {} as RouterStateSnapshot;
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false if productid is not provided', () => {
    state.url = '/collection/4/products/A';
    const result = guard.canActivate(route, state);
    expect(result).toBeFalsy();
  });

  it('should return true if product is active', () => {
    state.url = '/collection/4/products/1';
    const result = guard.canActivate(route, state);
    expect(result).toBeTruthy();
  });
});
