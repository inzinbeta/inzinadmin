import { Routes } from '@angular/router';
import { CrudNgxTableComponent } from './crud-ngx-table/crud-ngx-table.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';

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
  }
];