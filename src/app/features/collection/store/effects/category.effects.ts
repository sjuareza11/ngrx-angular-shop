import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryApiService } from '../../../../core/services/category-api.service';
import { loadAllCategoriesRequest, loadAllCategoriesSuccess } from '../actions/category.actions';

import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class CategoryEffects {
  loadAllCategoriessRequest$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadAllCategoriesRequest),
      switchMap(() => this._categoryApiService.getAllCategories()),
      map(response => loadAllCategoriesSuccess({ categories: response }))
    )
  );

  constructor(private _actions$: Actions, private _categoryApiService: CategoryApiService) {}
}
