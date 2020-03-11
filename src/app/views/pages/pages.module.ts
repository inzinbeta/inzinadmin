import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatSnackBarModule
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

@NgModule({
  declarations: [ManagehomeComponent, ManagebannerComponent, ManagehomepopupComponent],
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
    PagesRoutingModule
  ],
  entryComponents:[ManagehomepopupComponent]
})
export class PagesModule { }
