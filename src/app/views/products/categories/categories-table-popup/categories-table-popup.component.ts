import { Component, OnInit, Inject, ViewChild,NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from "rxjs/operators";



@Component({
  selector: 'app-categories-table-popup',
  templateUrl: './categories-table-popup.component.html',
  styleUrls: ['./categories-table-popup.component.scss']
})
export class CategoriesTablePopupComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 
 

 
  
  public itemForm: FormGroup;
  fileData: File = null;
previewUrl:any = null;
previewUrlLogo:any=null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
  constructor(

    
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CategoriesTablePopupComponent>,
    private fb: FormBuilder,
    private ngZone: NgZone


    
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
    this.buildItemForm(this.data.payload)
  }
  buildItemForm(item) {
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
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
