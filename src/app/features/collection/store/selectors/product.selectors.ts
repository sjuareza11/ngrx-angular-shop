import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.State>(fromProduct.productFeatureKey);
export const selectProducts = createSelector(selectProductState, (state: fromProduct.State) => state.products);
export const selectCurrentProductActive = createSelector(
  selectProductState,
  (state: fromProduct.State) => state.currentProductActive
);
