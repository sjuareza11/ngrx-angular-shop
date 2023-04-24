import { createReducer, on } from '@ngrx/store';
import { Category } from '../../../../core/models/category';
import * as CategoriesActions from '../actions/category.actions';

export const categoryFeatureKey = 'category';

export interface State {
  categories: Category[];
}

export const initialState: State = {
  categories: [],
};

export const categoryFeatureReducer = createReducer(
  initialState,
  on(CategoriesActions.loadAllCategoriesSuccess, (state, action) => ({
    ...state,
    categories: action.categories,
  }))
);
