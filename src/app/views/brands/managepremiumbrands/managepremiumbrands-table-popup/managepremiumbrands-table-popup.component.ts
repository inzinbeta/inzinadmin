import { Component, OnInit, Inject, ViewChild,NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from "rxjs/operators";
import {HttpService} from '../../../../shared/services/http.service';



@Component({
  selector: 'app-managepremiumbrands-table-popup',
  templateUrl: './managepremiumbrands-table-popup.html',
  styleUrls: ['./managepremiumbrands-table-popup.scss']
})
export class ManagePremiumBrandsTablePopupComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = [];
  parentCategory:string[]=[];
 
 

  
  
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
    let file=fileName.split("/")[1];
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
    console.log("build item form",item);
    if(Object.keys(item).length>0)
    {
  this.previewUrlLogo=this.linkImg(item.imagelogo);
 
    //this.fileDatalogo=this.linkImg(item.imagelogo);
    //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }
  
    this.itemForm = this.fb.group({
      
      brand: [item.brand || ''],
    
      parentcategory : [item.parentcategory || ''],
      cnf:[item.cnf || ''],
      cnfarea:[item.cnfarea || ''],
      cnfinvestment:[item.cnfinvestment || ''],
      cnfsalesteam:[item.cnfsalesteam || ''],
      distributor:[item.distributor || ''],
      distributorarea:[item.distributorarea || ''],
      distributorinvestment:[item.distributorinvestment || ''],
      distributorsalesteam:[item.distributorsalesteam || ''],
      ////
      dealer:[item.dealer || ''],
      dealerarea:[item.dealerarea || ''],
      dealerinvestment:[item.dealerinvestment || ''],
      dealersalesteam:[item.dealersalesteam || ''],
     
      description: [item.description || '']
      
      
   
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
    this.buildItemForm(this.data.payload)
  }
}
