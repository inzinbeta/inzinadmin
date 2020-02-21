import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManageenquiriesComponent } from './manageenquiries/manageenquiries.component';

const routes: Routes = [

  { 
    path: 'manageusers', 
    component:ManageusersComponent, 
    data: { title: 'Manage Users', breadcrumb: 'Manage Users' } 
  },

  { 
    path: 'manageenquiries', 
    component:ManageenquiriesComponent, 
    data: { title: 'Manage Enquiries', breadcrumb: 'Manage Enquiries' } 
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
