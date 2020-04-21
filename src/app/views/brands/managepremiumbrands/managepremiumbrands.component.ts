import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';

import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";


import {HttpService} from '../../../shared/services/http.service';
import { ManagePremiumBrandsTablePopupComponent } from './managepremiumbrands-table-popup/managepremiumbrands-table-popup.component';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-managepremiumbrands',
  templateUrl: './managepremiumbrands.component.html',
  styleUrls: ['./managepremiumbrands.component.scss'],
  animations: egretAnimations
})
export class ManagepremiumbrandsComponent implements OnInit {

  public items: any[];
  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,

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
    this.getItemSub = this.service.getAllServices()
      .subscribe(data => {
        this.items = data;
      })
  }

  openPopUp(data: any = {}, isNew?,_id:any="") {
    console.log("isnew",isNew);
    let title = isNew ? 'Add New Service' : 'Update Service';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ManagePremiumBrandsTablePopupComponent, {
      width: '720px',
      height:'590px',
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
          console.log("the data entered premium brand",res);
          res.append("save","yes");
          this.service.saveServices(res)
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
          this.service.saveServices(res)
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
          this.service.deleteServices({brandid:row})
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        }
      })
  }


}
