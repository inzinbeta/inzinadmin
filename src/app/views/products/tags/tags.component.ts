import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';

import { Subscription } from 'rxjs';
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { ProductService } from '../product.service';
import { TagsTableGroupComponent } from './tags-table-group/tags-table-group.component';
import { HttpService } from 'app/shared/services/http.service';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],

  animations: egretAnimations
})
export class TagsComponent implements OnInit , OnDestroy {
  public items: any[];
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
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
  }
  getItems() {
    this.loader.open();
    this.getItemSub = this.service.getAllTags("all")
      .subscribe(data => {
       
        this.items = data;
        this.loader.close();
      })
  }

  openPopUp(data: any = {}, isNew?,row:any="") {
    let title = isNew ? 'Add New  Tag' : 'Update Tag';
    let dialogRef: MatDialogRef<any> = this.dialog.open(TagsTableGroupComponent, {
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
          let tempobj={};
          tempobj["save"]="yes";
          tempobj["tag"]=res;

          this.service.saveTags(tempobj)
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        } else {
          let tempobj={};
          tempobj["update"]="yes";
          tempobj["tag"]=res;
          tempobj["_id"]=row;
          this.service.saveTags(tempobj)
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
          this.service.deleteTags(row)
            .subscribe(data => {
              this.items = data["data"];
              this.loader.close();
              this.snack.open(data["message"], 'OK', { duration: 4000 })
            })
        }
      })
  }

}

