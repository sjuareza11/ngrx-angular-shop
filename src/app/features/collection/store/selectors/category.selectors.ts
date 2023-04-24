import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategory from '../reducers/category.reducer';

export const selectCategoryState = createFeatureSelector<fromCategory.State>(fromCategory.categoryFeatureKey);
export const selectCategories = createSelector(selectCategoryState, (state: fromCategory.State) => state.categories);
