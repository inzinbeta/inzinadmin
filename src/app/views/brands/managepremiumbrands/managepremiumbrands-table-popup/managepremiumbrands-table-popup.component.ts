import { Component, OnInit, Inject, ViewChild,NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from "rxjs/operators";
import {HttpService} from '../../../../shared/services/http.service';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-managepremiumbrands-table-popup',
  templateUrl: './managepremiumbrands-table-popup.html',
  styleUrls: ['./managepremiumbrands-table-popup.scss']
})
export class ManagePremiumBrandsTablePopupComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = [];
  parentCategory:string[]=[];
 
  categoryDescription = ``;
  metaHeadingDescription = ``;
  metaDescription=``;

  
  
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
    public dialogRef: MatDialogRef<ManagePremiumBrandsTablePopupComponent>,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private service: HttpService


    
  ) { }


  linkImg(fileName) {
    let file=fileName.replace(/\\/g, '/').split("/")[1];
    // base_URL returns localhost:3000 or the production URL
        return `http://${environment.url}:${environment.port}/${file}`;
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
    console.log("build item form",item);
    if(Object.keys(item).length>0)
    {
  this.previewUrlLogo=this.linkImg(item.imagelogo);
 
    //this.fileDatalogo=this.linkImg(item.imagelogo);
    //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }
  
    this.itemForm = this.fb.group({
      
      title: [item.title || ''],
      description: [item.description || ''],
      seo_keywords: [item.seo_keywords || ''],
      seo_metadescription: [item.seo_metadescription || ''],
      seo_metatitle: [item.seo_metatitle || ''],
      seo_metaheading: [item.seo_metaheading || ''],
      seo_metaheadingdescription: [item.seo_metaheadingdescription || ''],
      
      
   
    })
  }

  
/**
 * Get Brands
 */

 getBrands()
 {
this.service.getAllBrands().subscribe(data=>{
  
this.toppingList.push(...data.map(({title})=>title));
  
})
 }

 getCategories()
 {
this.service.getAllCategory().subscribe(data=>{
  this.parentCategory.push(...data.map(({name})=>name));
})
 }


  
  submit() {
   

    // Append Form data here and send the data further 
      const fd=new FormData();
     
      
       if(this.fileDatalogo )
      {
        let file_ext=this.fileDatalogo.name.split(".");
       
        fd.append('imagelogo',this.fileDatalogo,`categoryicon.${file_ext[1]}`);
       
        fd.append('formavalues',JSON.stringify(this.itemForm.value));
     
        this.dialogRef.close(fd)
      }
      else{
        console.log(this.fileDatalogo);
        //fd.append('imagelogo',this.fileDatalogo,`categoryicon.${file_ext[1]}`);
        //fd.append('imagesidebar',this.fileDatasidebar,`categoryicon.${file_extt[1]}`);
        fd.append('formavalues',JSON.stringify(this.itemForm.value));
     
        this.dialogRef.close(fd)
      }
    
    
    

    

    
  }



  ngOnInit() {
    this.getBrands();
    this.getCategories();
    this.buildItemForm(this.data.payload);
    this.categoryDescription = this.data.payload.description||``;
    this.metaHeadingDescription = this.data.payload.seo_metaheadingdescription||``;
    this.metaDescription=this.data.payload.seo_metadescription ||``;
  }
}
