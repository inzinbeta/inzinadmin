import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagehomeComponent } from './managehome/managehome.component';
import { ManagebannerComponent } from './managebanner/managebanner.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { BusinessprofileComponent } from './businessprofile/businessprofile.component';
import { AvailabilityComponent } from './availability/availability.component';

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
    data: { title: 'Manage Settings', breadcrumb: 'Manage Settings' } 
  },
  { 
    path: 'businessprofile', 
    component:BusinessprofileComponent, 
    data: { title: 'Manage Business Profile', breadcrumb: 'Manage Business Profile' } 
  },

  { 
    path: 'availability', 
    component:AvailabilityComponent, 
    data: { title: 'Manage Availability', breadcrumb: 'Manage Availability' } 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
