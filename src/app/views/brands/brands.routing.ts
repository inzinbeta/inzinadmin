import { Routes } from '@angular/router';


import { ManagepremiumbrandsComponent } from './managepremiumbrands/managepremiumbrands.component';


export const CrudsRoutes: Routes = [
  { 
    path: 'manageservices', 
    component: ManagepremiumbrandsComponent, 
    data: { title: 'Manage Services', breadcrumb: 'Manage Services' } 
  },
 
];