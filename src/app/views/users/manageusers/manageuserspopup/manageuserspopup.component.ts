import { Component, OnInit, Inject, ViewChild,NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from "rxjs/operators";
import {HttpService} from '../../../../shared/services/http.service';

@Component({
  selector: 'app-manageuserspopup',
  templateUrl: './manageuserspopup.component.html',
  styleUrls: ['./manageuserspopup.component.scss']
})
export class ManageuserspopupComponent implements OnInit {

  toppings = new FormControl();
  toppingList: any[] = [{label:"Active",value:true},{label:"In-Active",value:false}];
  parentCategory:any[]=[{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Dealer",value:"dealer"}];
 
 

  
  
  public itemForm: FormGroup;
  fileDatalogo: File = null;
  fileDatasidebar: File = null;
previewUrl:any = "assets/images/download.jpeg";
previewUrlLogo:any="assets/images/download.jpeg";
fileUploadProgress: string = null;
uploadedFilePath: string = null;
  constructor(

    /**
     * this data is injecting here 
     */
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ManageuserspopupComponent>,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private service: HttpService


    
  ) { }


  linkImg(fileName) {
    let file=fileName.replace(/\\/g, '/').split("/")[1];
    // base_URL returns localhost:3000 or the production URL
        return `http://localhost:3900/${file}`;
      }

  fileProgress1(fileInput: any) {
    this.fileDatalogo = <File>fileInput.target.files[0];
    this.preview1();
}

preview1() {
  // Show preview 
  var mimeType = this.fileDatalogo.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileDatalogo); 
  reader.onload = (_event) => { 
    this.previewUrlLogo = reader.result; 
  }
}

fileProgress(fileInput: any) {
  this.fileDatasidebar = <File>fileInput.target.files[0];
  this.preview();
}

preview() {
// Show preview 
var mimeType = this.fileDatasidebar.type;
if (mimeType.match(/image\/*/) == null) {
  return;
}

var reader = new FileReader();      
reader.readAsDataURL(this.fileDatasidebar); 
reader.onload = (_event) => { 
  this.previewUrl = reader.result; 
}
}
  
  buildItemForm(item) {
  
  
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      username: [item.username || ''],
      password:[item.password || ''],
      email: [item.email || ''],
      role: [item.role || ''],
      isactive : [item.isactive || ''],
      
     
      
      
   
    })
  }

  
/**
 * Get Brands
 */



  
  submit() {
   

    // Append Form data here and send the data further 

    this.dialogRef.close(this.itemForm.value)
 }



  ngOnInit() {

  
    this.buildItemForm(this.data.payload)
  }
}
