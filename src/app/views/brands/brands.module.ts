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
  MatGridListModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';


import { CrudsRoutes } from './brands.routing';


import { TranslateModule } from '@ngx-translate/core';


import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ManagepremiumbrandsComponent } from './managepremiumbrands/managepremiumbrands.component';
import { ManagePremiumBrandsTablePopupComponent } from './managepremiumbrands/managepremiumbrands-table-popup/managepremiumbrands-table-popup.component';





@NgModule({
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
    RouterModule.forChild(CrudsRoutes)
  ],
  declarations: [ManagepremiumbrandsComponent,ManagePremiumBrandsTablePopupComponent],
  providers: [],
  entryComponents: [ManagePremiumBrandsTablePopupComponent]
})
export class BrandsModule { }
