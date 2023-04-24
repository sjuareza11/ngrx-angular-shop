import { mockCategories } from '../../../../mocks/categories.mock';
import * as CategoryActions from '../actions/category.actions';
import { categoryFeatureReducer, initialState } from './category.reducer';
describe('categoriesFeatureReducer', () => {
  it('should handle loadAllCategoriesSuccess', () => {
    const action = CategoryActions.loadAllCategoriesSuccess({ categories: mockCategories });
    const state = categoryFeatureReducer(initialState, action);
    expect(state.categories).toEqual(mockCategories);
  });
});
