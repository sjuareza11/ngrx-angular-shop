import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CategoryApiService } from '../../core/services/category-api.service';
import { CoreModule } from './../../core/core.module';
import { ProductApiService } from './../../core/services/product-api.service';
import { CollectionRoutingModule } from './collection-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFilterBarComponent } from './components/product-filter-bar/product-filter-bar.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryEffects } from './store/effects/category.effects';
import { ProductEffects } from './store/effects/product.effects';
import * as fromCategories from './store/reducers/category.reducer';
import * as fromProducts from './store/reducers/product.reducer';

@NgModule({
  declarations: [ProductsComponent, ProductFilterBarComponent, ProductDetailsComponent, ProductCardComponent],
  imports: [
    CoreModule,
    CommonModule,
    StoreModule.forFeature(fromCategories.categoryFeatureKey, fromCategories.categoryFeatureReducer),
    StoreModule.forFeature(fromProducts.productFeatureKey, fromProducts.productFeatureReducer),
    EffectsModule.forFeature([ProductEffects, CategoryEffects]),
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    CollectionRoutingModule,
  ],
  providers: [ProductApiService, CategoryApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CollectionModule {}
