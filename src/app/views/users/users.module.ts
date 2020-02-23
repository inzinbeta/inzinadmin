import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatGridTile,
  MatGridListModule,

 } from '@angular/material';

import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

import { UsersRoutingModule } from './users-routing.module';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManageuserspopupComponent } from './manageusers/manageuserspopup/manageuserspopup.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { ManageenquiriesComponent } from './manageenquiries/manageenquiries.component';
import { ManagenquiriespopupComponent } from './manageenquiries/managenquiriespopup/managenquiriespopup.component';

@NgModule({
  declarations: [ManageusersComponent, ManageuserspopupComponent, ManageenquiriesComponent, ManagenquiriespopupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    NgxDatatableModule,
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
 
    UsersRoutingModule
  ],
  entryComponents: [ManageuserspopupComponent,ManagenquiriespopupComponent]
})
export class UsersModule { }
