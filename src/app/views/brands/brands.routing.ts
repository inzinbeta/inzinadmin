import { Routes } from '@angular/router';

import { ManagebrandsComponent } from './managebrands/managebrands.component';
import { ManagepremiumbrandsComponent } from './managepremiumbrands/managepremiumbrands.component';


export const CrudsRoutes: Routes = [
  { 
    path: 'managepremiumbrands', 
    component: ManagepremiumbrandsComponent, 
    data: { title: 'Manage Premium Brands', breadcrumb: 'Manage Premium Brands' } 
  },
 
];