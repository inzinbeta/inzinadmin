import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagehomeComponent } from './managehome/managehome.component';
import { ManagebannerComponent } from './managebanner/managebanner.component';

const routes: Routes = [
  { 
    path: 'managehome', 
    component:ManagehomeComponent, 
    data: { title: 'Manage Home Page', breadcrumb: 'Manage Home Page' } 
  },
  { 
    path: 'managebanner', 
    component:ManagebannerComponent, 
    data: { title: 'Manage Banner', breadcrumb: 'Manage Banner' } 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
