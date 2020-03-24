import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagehomeComponent } from './managehome/managehome.component';
import { ManagebannerComponent } from './managebanner/managebanner.component';
import { TopheaderComponent } from './topheader/topheader.component';

const routes: Routes = [
  { 
    path: 'managehome', 
    component:ManagehomeComponent, 
    data: { title: 'Manage Home Page', breadcrumb: 'Manage Home Page' } 
  },
  { 
    path: 'howitworks', 
    component:ManagebannerComponent, 
    data: { title: 'Manage How It Works', breadcrumb: 'Manage How It Works' } 
  },

  { 
    path: 'topheader', 
    component:TopheaderComponent, 
    data: { title: 'Manage Top Header', breadcrumb: 'Manage Top Header' } 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
