import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';

import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { ProductService } from '../product.service';
import { ManagebrandsTablePopupComponent } from './managebrands-table-popup/managebrands-table-popup.component';
import { HttpService } from 'app/shared/services/http.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-managebrands',
  templateUrl: './managebrands.component.html',
  styleUrls: ['./managebrands.component.scss'],
  animations: egretAnimations
})
export class ManagebrandsComponent implements OnInit {

  
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


  ngOnInit() {
    this.getItems()
  }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
  }
  getItems() {
    this.loader.open();
    this.getItemSub = this.service.getAllBrands()
      .subscribe(data => {
        this.loader.close();
        this.items = data;
      })
  }

  openPopUp(data: any = {}, isNew?,_id:any="") {
    console.log("isnew",isNew);
    let title = isNew ? 'Add New Brand' : 'Update Brand';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ManagebrandsTablePopupComponent, {
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
          console.log("the data entered by user",res);
          res.append("save","yes");
          this.service.saveBrand(res)
            .subscribe(data => {
              console.log("incoming data after save",data);
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        } else {
          console.log("update called",_id);
          res.forEach(element => {
            console.log(element);
          });
          res.append("update","yes");
          res.append("_id",_id);
          this.service.saveBrand(res)
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
          this.service.deleteBrand({brandid:row})
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        }
      })
  }

}
