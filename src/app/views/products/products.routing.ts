import { Routes } from '@angular/router';
import { CrudNgxTableComponent } from './crud-ngx-table/crud-ngx-table.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { ManagebrandsComponent } from './managebrands/managebrands.component';


export const CrudsRoutes: Routes = [
  { 
    path: 'ngx-table', 
    component: CrudNgxTableComponent, 
    data: { title: 'NgX Table', breadcrumb: 'NgX Table' } 
  },
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
  }
];