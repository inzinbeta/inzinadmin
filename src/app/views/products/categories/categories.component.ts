import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';

import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { ProductService } from '../product.service';
import { CategoriesTablePopupComponent } from './categories-table-popup/categories-table-popup.component';
import {HttpService} from '../../../shared/services/http.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: egretAnimations
})
export class CategoriesComponent implements OnInit ,OnDestroy{

  public items: any[];
  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private crudService: ProductService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private service : HttpService
  ) { }


  linkImg(fileName) {
    let file=fileName.replace(/\\/g, '/').split("/")[1];
    // base_URL returns localhost:3000 or the production URL
        return `http://${environment.url}:${environment.port}/${file}`;
      }
 
  getItems() {
    this.loader.open();
    this.getItemSub = this.service.getAllCategory()
      .subscribe(data => {
      
        this.items = data;
        this.loader.close();
      })
  }

  openPopUp(data: any = {}, isNew?,_id:any="") {
    console.log("isnew",isNew);
    let title = isNew ? 'Add New Category' : 'Update Category';
    let dialogRef: MatDialogRef<any> = this.dialog.open(CategoriesTablePopupComponent, {
      width: '720px',
      maxHeight: '90vh' ,//you can adjust the value as per your view
      disableClose: true,
      data: { title: title, payload: data }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        if(!res) {
          // If user press cancel
          return;
        }
        this.loader.open();
        if (isNew) {
          // Adding item here in the database
        
          res.append("save","yes");
          this.service.saveCategory(res)
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
             
              
              
            })
        } else {
       
          res.forEach(element => {
            console.log(element);
          });
          res.append("update","yes");
          res.append("_id",_id);
          this.service.saveCategory(res)
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        }
      })
  }
  deleteItem(row) {
    console.log(row);
    this.confirmService.confirm({message: `Delete ${row.name}?`})
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.service.deleteCategory({categoryid:row})
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        }
      })
  }
  ngOnInit() {
    this.getItems()
  }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
  }
}
