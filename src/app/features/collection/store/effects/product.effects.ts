import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigationAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import { filter, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { INCORRECT_PRODUCT_PRICE_CATEGORY_ID } from 'src/app/core/constants/categories';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { selectRouteParams } from 'src/app/store/selectors/router.selector';
import { productDetailsUrlRegex } from '../../regex/url.regex';
import {
  loadProductDetailsRequest,
  loadProductDetailsSuccess,
  loadProductsByFiltersRequest,
  loadProductsByFiltersSuccess,
} from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  loadProductDetailsByUrl$ = createEffect(() =>
    this._actions$.pipe(
      ofType(routerNavigationAction),
      filter(action => productDetailsUrlRegex.test(action.payload.event.url)),
      withLatestFrom(this._store.select(selectRouteParams)),
      map(([, routeParams]) => loadProductDetailsRequest({ id: routeParams['productid'] }))
    )
  );

  loadProductsByFiltersRequest$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadProductsByFiltersRequest),
      switchMap(action =>
        this._productApiService
          .getProductsByFilters(action.data)
          .pipe(
            mergeMap(products =>
              products.length
                ? forkJoin(
                    products.map(product =>
                      product.category.id === INCORRECT_PRODUCT_PRICE_CATEGORY_ID
                        ? this._productApiService.getProduct(product.id)
                        : of(product)
                    )
                  )
                : of(products)
            )
          )
      ),
      map(response => loadProductsByFiltersSuccess({ products: response }))
    )
  );

  loadProductDetailsRequest$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadProductDetailsRequest),
      switchMap(action => this._productApiService.getProduct(action.id)),
      map(response => loadProductDetailsSuccess({ product: response }))
    )
  );

  constructor(private _actions$: Actions, private _productApiService: ProductApiService, private _store: Store) {}
}
