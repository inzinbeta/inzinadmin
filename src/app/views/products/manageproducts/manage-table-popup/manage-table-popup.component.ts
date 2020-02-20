import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import {HttpService} from '../../../../shared/services/http.service';
import { egretAnimations } from "../../../../shared/animations/egret-animations";


@Component({
  selector: 'app-manage-table-popup',
  templateUrl: './manage-table-popup.component.html',
  styleUrls: ['./manage-table-popup.component.scss'],
  animations: egretAnimations
})
export class ManageTablePopupComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 
 

 
  public items: Object;

  public items_tags: Object;
    public itemForm: FormGroup;
  fileData: File = null;
previewUrl:any = null;
previewUrlLogo:any=null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ManageTablePopupComponent>,
    private fb: FormBuilder,
    private service : HttpService
  ) { }




  fileProgress1(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview1();
}

preview1() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrlLogo = reader.result; 
  }
}

fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
  this.preview();
}

preview() {
// Show preview 
var mimeType = this.fileData.type;
if (mimeType.match(/image\/*/) == null) {
  return;
}

var reader = new FileReader();      
reader.readAsDataURL(this.fileData); 
reader.onload = (_event) => { 
  this.previewUrl = reader.result; 
}
}
  ngOnInit() {
    console.log("page");
    this.buildItemForm(this.data.payload)
    this.getItems()
    this.getTags()
    
  }
  
  getItems() {
 
    this.service.getAllProducts()

      .subscribe(data => {
       
        this.items = data;
      })
  }



getTags(){
  
  this.service.getAllTags()

    .subscribe(data => {
      
      this.items_tags = data;
      console.log(data);
    })
}



  buildItemForm(item) {
    this.itemForm = this.fb.group({
      tags: [item.tags || ''],
      brand: [item.brand || ''],
      metatitle: [item.metatitle || ''],
      heading: [item.heading || ''],
      parentcategory : [item.parentcategory || ''],
     
      keyword: [item.keyword || ''],
      description: [item.description || '']
      
    })
  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }

}
