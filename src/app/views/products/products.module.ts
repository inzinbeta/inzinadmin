import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
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

  MatGridListModule,

  MatCheckboxModule,

 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';


import { CrudsRoutes } from './products.routing';


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
import { QuillModule } from 'ngx-quill';
import { OffersComponent } from './offers/offers.component';
import { OfferstablepopupComponent } from './offers/offerstablepopup/offerstablepopup.component';
import { TagsPipe } from 'app/shared/pipes/tags.pipe';





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
   
    MatListModule,
    MatGridListModule,
    TranslateModule,
    SharedModule,
    QuillModule,
    MatCheckboxModule,
    NgxMatSelectSearchModule,
   

    
    RouterModule.forChild(CrudsRoutes)
  ],
  declarations: [ManageproductsComponent, ManageTablePopupComponent, CategoriesComponent, CategoriesTablePopupComponent, TagsComponent, TagsTableGroupComponent, ManagebrandsComponent, ManagebrandsTablePopupComponent, OffersComponent, OfferstablepopupComponent, TagsPipe,],
  providers: [ProductService],
  entryComponents: [OfferstablepopupComponent,ManageTablePopupComponent,CategoriesTablePopupComponent,TagsTableGroupComponent, ManagebrandsTablePopupComponent]
})
export class ProductsModule { }
