import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { ManageTablePopupComponent } from './manage-table-popup/manage-table-popup.component';
import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { ProductService } from '../product.service';

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
    private loader: AppLoaderService
  ) { }

  ngOnInit() {
    this.getItems()
  }

linkImg(fileName) {
  //let file=fileName.split("/")[1];
  // base_URL returns localhost:3000 or the production URL
    //  return `http://localhost:3900/${file}`;
    }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
  }
  getItems() {
    this.getItemSub = this.crudService.getItems()
      .subscribe(data => {
        this.items = data;
        console.log(this.items);
      })
  }

  openPopUp(data: any = {}, isNew?) {
    let title = isNew ? 'Add New Product' : 'Update Product';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ManageTablePopupComponent, {
      width: '720px',
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
          this.crudService.addItem(res)
            .subscribe(data => {
              this.items = data;
              this.loader.close();
              this.snack.open('Member Added!', 'OK', { duration: 4000 })
            })
        } else {
          this.crudService.updateItem(data._id, res)
            .subscribe(data => {
              this.items = data;
              this.loader.close();
              this.snack.open('Member Updated!', 'OK', { duration: 4000 })
            })
        }
      })
  }
  deleteItem(row) {
    this.confirmService.confirm({message: `Delete ${row.name}?`})
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.crudService.removeItem(row)
            .subscribe(data => {
              this.items = data;
              this.loader.close();
              this.snack.open('Member deleted!', 'OK', { duration: 4000 })
            })
        }
      })
  }
}
