import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { CategoryApiService } from 'src/app/core/services/category-api.service';
import { mockCategories, MockCategoriesApiService as MockCategoryApiService } from 'src/app/mocks/categories.mock';
import { loadAllCategoriesRequest, loadAllCategoriesSuccess } from '../actions/category.actions';
import { initialState } from '../reducers/category.reducer';
import { CategoryEffects } from './category.effects';

describe('CategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: CategoryEffects;
  let categoryApiService: CategoryApiService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoryEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: CategoryApiService, useClass: MockCategoryApiService },
      ],
    });

    effects = TestBed.inject(CategoryEffects);
    store = TestBed.inject(MockStore);
    categoryApiService = TestBed.inject(CategoryApiService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
  describe('loadAllCategoriessRequest$', () => {
    it('should fire if categories is empty', done => {
      const spy = spyOn(categoryApiService, 'getAllCategories').and.callThrough();
      actions$ = of(loadAllCategoriesRequest);
      effects.loadAllCategoriessRequest$.subscribe(res => {
        expect(res).toEqual(loadAllCategoriesSuccess({ categories: mockCategories }));
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});
