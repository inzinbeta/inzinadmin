import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { 
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatChipsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTabsModule,
  MatInputModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule,
  MatSnackBarModule,


 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { SharedModule } from './../../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { ManagehomeComponent } from './managehome/managehome.component';
import { ManagebannerComponent } from './managebanner/managebanner.component';
import { ManagehomepopupComponent } from './managehome/managehomepopup/managehomepopup.component';
import { TranslateModule } from '@ngx-translate/core';
import { QuillModule } from 'ngx-quill';
import { TopheaderComponent } from './topheader/topheader.component';
import { BannerpopupComponent } from './managebanner/bannerpopup/bannerpopup.component';
import { BusinessprofileComponent } from './businessprofile/businessprofile.component';
import { BusinesspopupComponent } from './businessprofile/businesspopup/businesspopup.component';
import { AvailabilityComponent } from './availability/availability.component';
import { AvailabilitypopupComponent } from './availability/availabilitypopup/availabilitypopup.component';
import { AvailabilityDistrictsPipe } from 'app/shared/pipes/availability-districts.pipe';


@NgModule({
  declarations: [AvailabilityDistrictsPipe,ManagehomeComponent, ManagebannerComponent, ManagehomepopupComponent, TopheaderComponent, BannerpopupComponent, BusinessprofileComponent, BusinesspopupComponent, AvailabilityComponent, AvailabilitypopupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxDatatableModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
   
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    QuillModule,
    MatListModule,
    MatGridListModule,
    TranslateModule,
    SharedModule,
    PagesRoutingModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatProgressBarModule,
    FileUploadModule,
    FormsModule,
    NgxMatSelectSearchModule,
    
   
  ],
  entryComponents:[ManagehomepopupComponent,BannerpopupComponent,BusinesspopupComponent,AvailabilitypopupComponent]
})
export class PagesModule { }
