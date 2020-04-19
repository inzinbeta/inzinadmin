import { Component, OnInit, Inject, ViewChild,NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from "rxjs/operators";
import {HttpService} from '../../../../shared/services/http.service';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-categories-table-popup',
  templateUrl: './categories-table-popup.component.html',
  styleUrls: ['./categories-table-popup.component.scss']
})
export class CategoriesTablePopupComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = [];
  parentCategory:string[]=["None"];
 
  categoryDescription = `Category Description`;
  metaHeadingDescription = `Meta Heading  Description`;
  metaDescription=`Meta Description`;


  
  
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
    public dialogRef: MatDialogRef<CategoriesTablePopupComponent>,
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
  this.previewUrl=this.linkImg(item.imagesidebar);
    //this.fileDatalogo=this.linkImg(item.imagelogo);
    //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }
  
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      slug: [item.slug || '',Validators.required],
      parentcategory : [item.parentcategory || '',Validators.required],
      description: [item.description || '',Validators.required],
      seo_metadescription: [item.seo_metadescription || '',Validators.required],
      seo_keywords: [item.seo_keywords || '',Validators.required],
      seo_metatitle: [item.seo_metatitle || '',Validators.required],
      seo_metaheading: [item.seo_metaheading || '',Validators.required],
      seo_metaheadingdescription: [item.seo_metaheadingdescription || '',Validators.required],
      
      
   
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


 onSearchChange(value)
 {
   
  let _data=value.split(/[ ,]+/g).join("-");
  delete this.itemForm.value["slug"];
  this.itemForm.setValue({"slug":_data,...this.itemForm.value});
 }


 getCategories()
 {
this.service.getAllCategory().subscribe(data=>{
  this.parentCategory.push(...data.reduce((acc,ele)=>{
    if(ele.isParent)
    {
      acc.push(ele.name);
    }

    return acc;


  },[]));
})
 }


  
  submit() {
   

    // Append Form data here and send the data further 



console.log(this.itemForm.value);


 
      const fd=new FormData();
     
      if(this.fileDatalogo && !this.fileDatasidebar )
      {
        let file_ext=this.fileDatalogo.name.split(".");
     
        fd.append('imagelogo',this.fileDatalogo,`categoryicon.${file_ext[1]}`);
       
        fd.append('formavalues',JSON.stringify(this.itemForm.value));
     
        this.dialogRef.close(fd)
      }
      else if(!this.fileDatalogo && this.fileDatasidebar)
      {
       // let file_ext=this.fileDatalogo.name.split(".");
        let file_extt=this.fileDatasidebar.name.split(".");
       
        fd.append('imagesidebar',this.fileDatasidebar,`categoryicon.${file_extt[1]}`);
        fd.append('formavalues',JSON.stringify(this.itemForm.value));
     
        this.dialogRef.close(fd)
      }
      else if(this.fileDatalogo && this.fileDatasidebar)
      {
        let file_ext=this.fileDatalogo.name.split(".");
        let file_extt=this.fileDatasidebar.name.split(".");
        fd.append('imagelogo',this.fileDatalogo,`categoryicon.${file_ext[1]}`);
        fd.append('imagesidebar',this.fileDatasidebar,`categoryicon.${file_extt[1]}`);
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
