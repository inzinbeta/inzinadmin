import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { HttpService } from 'app/shared/services/http.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: `http://${environment.url}:${environment.port}/admin/savePic` });
  public hasBaseDropZoneOver: boolean = false;
  public itemForm: FormGroup;
  private data:any=[];
  public oldpassword:any;
  public newpassword:any;
  
  
 
  constructor(
    private fb: FormBuilder,
    private service:HttpService,
    private snack: MatSnackBar,
    private loader: AppLoaderService,
   
   

  ) { 


    
  }



  buildItemForm(item) {
   
  
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      title: [item.title || '', Validators.required],
      email: [item.title || '', Validators.required],
      phone: [item.phone || '', Validators.required],
      address: [item.address || '', Validators.required],
      website: [item.website || '', Validators.required],
      socialmedia: [item.socialmedia || '', Validators.required],
      _id:[item._id],
     
     
      
   
    })
  }

getData()
{
  this.loader.open();
  this.service.getSiteInfo().subscribe(data=>{
    if(data["data"][0])
    {
      this.buildItemForm(data["data"][0]);
    }
 
    this.loader.close();
    
  })
}

Changepassword()
{
 if(this.oldpassword=="" || this.newpassword=="")
 {
  this.snack.open("Please Enter Both the Fields", 'OK', { duration: 4000 })
 }
else{

 // service start
 this.snack.open("Work in progress,Please change password from user section", 'OK', { duration: 4000 })

}
 
}


  submit() {
    this.loader.open();

    this.service.saveInfo(this.itemForm.value).subscribe(data=>{
      this.buildItemForm(data["data"][0]);
      this.loader.close();
      this.snack.open(data["message"], 'OK', { duration: 4000 })
    });
    
  }


  ngOnInit() {
    this.getData();
    this.buildItemForm(this.data);
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
