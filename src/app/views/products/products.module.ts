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
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { CrudNgxTableComponent } from './crud-ngx-table/crud-ngx-table.component';

import { CrudsRoutes } from './products.routing';

import { NgxTablePopupComponent } from './crud-ngx-table/ngx-table-popup/ngx-table-popup.component'
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from './product.service';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { ManageTablePopupComponent } from './manageproducts/manage-table-popup/manage-table-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesTablePopupComponent } from './categories/categories-table-popup/categories-table-popup.component';
import { TagsComponent } from './tags/tags.component';
import { TagsTableGroupComponent } from './tags/tags-table-group/tags-table-group.component';
import { ManagebrandsComponent } from './managebrands/managebrands.component';
import { ManagebrandsTablePopupComponent } from './managebrands/managebrands-table-popup/managebrands-table-popup.component';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';



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
  declarations: [CrudNgxTableComponent, ManageproductsComponent, ManageTablePopupComponent, CategoriesComponent, CategoriesTablePopupComponent, TagsComponent, TagsTableGroupComponent, ManagebrandsComponent, ManagebrandsTablePopupComponent],
  providers: [ProductService],
  entryComponents: [ManageTablePopupComponent,CategoriesTablePopupComponent,TagsTableGroupComponent, ManagebrandsTablePopupComponent]
})
export class ProductsModule { }
