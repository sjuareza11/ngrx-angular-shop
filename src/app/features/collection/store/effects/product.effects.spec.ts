import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { mockProducts, MockProductsApiService as MockProductApiService } from '../../../../mocks/products.mock';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  loadProductDetailsRequest,
  loadProductDetailsSuccess,
  loadProductsByFiltersRequest,
  loadProductsByFiltersSuccess,
} from '../actions/product.actions';
import { initialState } from '../reducers/category.reducer';
import { ProductEffects } from './product.effects';

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;
  let productApiService: ProductApiService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: ProductApiService, useClass: MockProductApiService },
      ],
    });

    effects = TestBed.inject(ProductEffects);
    store = TestBed.inject(MockStore);
    productApiService = TestBed.inject(ProductApiService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
  describe('loadProductsByFiltersRequest$', () => {
    it('should fire if user apply filters', done => {
      const spy = spyOn(productApiService, 'getProductsByFilters').and.callThrough();
      actions$ = of(loadProductsByFiltersRequest);
      effects.loadProductsByFiltersRequest$.subscribe(res => {
        expect(res).toEqual(loadProductsByFiltersSuccess({ products: mockProducts }));
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
  describe('loadProductDetailsRequest$', () => {
    it('should fire if user navigate to product details', done => {
      const spy = spyOn(productApiService, 'getProduct').and.callThrough();
      actions$ = of(loadProductDetailsRequest);
      effects.loadProductDetailsRequest$.subscribe(res => {
        expect(res).toEqual(loadProductDetailsSuccess({ product: mockProducts[0] }));
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});
