import { Routes } from '@angular/router';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { ManagebrandsComponent } from './managebrands/managebrands.component';
import { OffersComponent } from './offers/offers.component';


export const CrudsRoutes: Routes = [
  
  { 
    path: 'manageproducts', 
    component:ManageproductsComponent, 
    data: { title: 'Manage Products', breadcrumb: 'Manage Products' } 
  },
  { 
    path: 'categories', 
    component:CategoriesComponent, 
    data: { title: 'Categories', breadcrumb: 'Manage Categories' } 
  },
  { 
    path: 'tags', 
    component:TagsComponent, 
    data: { title: 'Tags', breadcrumb: 'Manage Tags' } 
  },
  { 
    path: 'managebrands', 
    component:ManagebrandsComponent, 
    data: { title: 'Manage Brands', breadcrumb: 'Manage Brands' } 
  },
  { 
    path: 'manageoffers', 
    component:OffersComponent, 
    data: { title: 'Manage Offers', breadcrumb: 'Manage Offers' } 
  }
];