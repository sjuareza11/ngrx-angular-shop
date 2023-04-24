import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { productDetailsUrlRegex } from './../regex/url.regex';

@Injectable({
  providedIn: 'root',
})
export class CheckProductDetailsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return productDetailsUrlRegex.test(state.url);
  }
  constructor() {}
}
