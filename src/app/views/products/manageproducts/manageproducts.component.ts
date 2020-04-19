import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { ManageTablePopupComponent } from './manage-table-popup/manage-table-popup.component';
import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { ProductService } from '../product.service';
import { HttpService } from 'app/shared/services/http.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.scss'],
  animations: egretAnimations
})
export class ManageproductsComponent implements OnInit ,OnDestroy{

  public items: Object;
  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private crudService: ProductService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private service:HttpService
  ) { }

  ngOnInit() {
    this.getItems()
  }

  linkImg(fileName) {
    let file=fileName.replace(/\\/g, '/').split("/")[1];
    // base_URL returns localhost:3000 or the production URL
        return `http://${environment.url}:${environment.port}/${file}`;
      }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
  }
  getItems() {
    this.loader.open();
    this.getItemSub = this.service.getAllProducts()
      .subscribe(data => {
        this.items = data;
        this.loader.close();
        
      })
  }

  openPopUp(data: any = {}, isNew?,row:any="") {
    let title = isNew ? 'Add New Product' : 'Update Product';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ManageTablePopupComponent, {
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
       
          console.log(...res);
        
          res.append("save","yes");
          this.service.saveProduct(res)
            .subscribe(data => {
            
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        } else {
          res.append("update","yes");
          res.append("_id",row);

          this.service.saveProduct(res)
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        }
      })
  }
  deleteItem(row) {
    this.confirmService.confirm({message: `Delete ${row.name}?`})
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.service.deleteProduct(row)
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        }
      })
  }
}
