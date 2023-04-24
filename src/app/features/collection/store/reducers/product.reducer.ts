import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import * as ProductActions from '../actions/product.actions';

export const productFeatureKey = 'product';

export interface State {
  products: Product[];
  currentProductActive?: Product;
}

export const initialState: State = {
  products: [],
};

export const productFeatureReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsByFiltersSuccess, (state, action) => ({
    ...state,
    products: [...action.products],
  })),
  on(ProductActions.loadProductDetailsSuccess, (state, action) => ({
    ...state,
    currentProductActive: action.product,
  }))
);
