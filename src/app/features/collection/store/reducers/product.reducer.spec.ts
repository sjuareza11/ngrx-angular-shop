import { mockProducts } from 'src/app/mocks/products.mock';
import * as ProductActions from '../actions/product.actions';
import { initialState, productFeatureReducer } from './product.reducer';

describe('Product Reducer', () => {
  it('should handle loadProductDetailsSuccess', () => {
    const action = ProductActions.loadProductDetailsSuccess({ product: mockProducts[0] });
    const state = productFeatureReducer(initialState, action);
    expect(state.currentProductActive).toEqual(mockProducts[0]);
  });
  it('should handle loadProductsByFiltersSuccess', () => {
    const action = ProductActions.loadProductsByFiltersSuccess({ products: mockProducts });
    const state = productFeatureReducer(initialState, action);
    expect(state.products).toEqual(mockProducts);
  });
});
