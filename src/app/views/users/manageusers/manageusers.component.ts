import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';

import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import {HttpService} from '../../../shared/services/http.service';
import { ManageuserspopupComponent } from './manageuserspopup/manageuserspopup.component';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss'],
  animations: egretAnimations
})
export class ManageusersComponent implements OnInit {

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
        return `http://localhost:3900/${file}`;
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
    this.getItemSub = this.service.getUsers()
      .subscribe(data => {
        this.items = data;
      })
  }

  openPopUp(data: any = {}, isNew?,_id:any="") {
    console.log("isnew",isNew);
    let title = isNew ? 'Add New User' : 'Update User';
    let dialogRef: MatDialogRef<any> = this.dialog.open(ManageuserspopupComponent, {
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
          // Adding item here in the database
          console.log("the data entered by user",res);
        
          this.service.registerUser(res)
            .subscribe(data => {
             
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        } else {
          console.log("update called",_id);
         res._id=_id;
         res.update="yes";
         
          this.service.registerUser(res)
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        }
      })
  }
  deleteItem(row,_id) {
    console.log(row);
    this.confirmService.confirm({message: `Delete ${row.username}?`})
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.service.deleteUser({_id:_id})
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        }
      })
  }


}
