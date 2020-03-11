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
  colours: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 
 

 
  public items: Object;

  public items_tags: Object;
  public items_brands: Object;
  public items_categories :Object;
    public itemForm: FormGroup;
  fileData: File = null;
  previewUrl:any = "assets/images/download.jpeg";
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
    this.getBrands()
    this.getCategories()
    
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
getBrands(){
  
  this.service.getAllBrands()

    .subscribe(data => {
      
      this.items_brands = data;
      console.log(data);
    })
}
getCategories(){
  this.service.getAllCategory()

    .subscribe(data => {
      
      this.items_categories = data;

      console.log(data);
    })
}



  buildItemForm(item) {

   
  
    this.itemForm = this.fb.group({
      tags: [item.tags || ''],
      tag : [item.tag || ''],
      brand: [item.brand || ''],
      subbrand: [item.subbrand || ''],
      category: [item.category || ''],
      subcategory: [item.subcategory || ''],
      metatitle: [item.metatitle || ''],
      heading: [item.heading || ''],
      colour: [item.colour || ''],
      size: [item.size || ''],
      name: [item.name || ''],
      slug: [item.slug || ''],
      stock: [item.stock || ''],
    
      keywords: [item.keyword || ''],
      metadescription: [item.metadescription || ''],
      description: [item.description || ''],
     seo_keywords: [item.seo_keyword || ''],
      seo_metadescription: [item.seo_metadescription || ''],
      seo_metatitle: [item.seo_metatitle || ''],
      seo_metaheading: [item.seo_metaheading || ''],
      seo_metaheadingdescription: [item.seo_metaheadingdescription || '']
      
    })
  }

  submit() {
    const fd=new FormData();
   
       if(!this.fileData)
      {
       // let file_ext=this.fileDatalogo.name.split(".");
        let file_extt=this.fileData.name.split(".");
       
        fd.append('imagesidebar',this.fileData,`categoryicon.${file_extt[1]}`);
        fd.append('formavalues',JSON.stringify(this.itemForm.value));
     
        this.dialogRef.close(fd)
      }
      
      else{
        
        
        fd.append('formavalues',JSON.stringify(this.itemForm.value));
     
        this.dialogRef.close(fd)
      }
    
    
    
  }

}
