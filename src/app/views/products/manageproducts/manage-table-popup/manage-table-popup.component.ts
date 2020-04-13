import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
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
  
  brands:string[]=[];
  
  Description = ``;
  metaHeadingDescription = ``;
  metaDescription=``;
  slug="";


 
  public items: Object;

  public items_tags: Object;
  public items_brands: Object;
  public items_categories :Object;
  public items_allcategories :any=[];
  public items_subcategories :any=[];
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
    this.getCategories();

    this.Description = this.data.payload.description||``;
  this.metaHeadingDescription = this.data.payload.seo_metaheadingdescription||``;
  this.metaDescription=this.data.payload.seo_metadescription ||``;
    
  }
  

  onSearchChange(value)
  {
    
   let _data=value.split(/[ ,]+/g).join("-");
   delete this.itemForm.value["slug"];
   this.itemForm.setValue({"slug":_data,...this.itemForm.value});
  }
  getItems() {
 
    this.service.getAllProducts()

      .subscribe(data => {
       
        this.items = data;
      })
  }

  getChildCategories(value)
  {
   
   this.items_subcategories= this.items_allcategories.filter(ele=>ele.parentcategory==value);
   console.log(this.items_subcategories);
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
      this,this.items_allcategories=data;
      this.items_categories = data.filter(ele=>ele.isParent);

      console.log(data);
    })
}
linkImg(fileName) {
  let file=fileName.replace(/\\/g, '/').split("/")[1];
  // base_URL returns localhost:3000 or the production URL
      return `http://localhost:3900/${file}`;
    }


  buildItemForm(item) {

    if(Object.keys(item).length>0)
    {
 // this.previewUrlLogo=this.linkImg(item.imagelogo);
 this.previewUrl=this.linkImg(item.imagelogo);
    //this.fileDatalogo=this.linkImg(item.imagelogo);
    //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }
  
    this.itemForm = this.fb.group({
      tags: [item.tags || ''],
     
      brand: [item.brand || ''],
      
      category: [item.category || ''],
      subcategory: [item.subcategory || ''],
     
     
      colour: [item.colour || ''],
      size: [item.size || ''],
      name: [item.name || ''],
      slug: [item.slug || ''],
      stock: [item.stock || ''],
      specifications: this.fb.array([this.fb.group({ point: '' })]),
      
      description: [item.description || ''],
      seo_keywords: [item.seo_keywords || ''],
      seo_metadescription: [item.seo_metadescription || ''],
      seo_metatitle: [item.seo_metatitle || ''],
      seo_metaheading: [item.seo_metaheading || ''],
      seo_metaheadingdescription: [item.seo_metaheadingdescription || ''],
      
    })
  }

    ///////// This is new ////////
    get specifications() {
      return this.itemForm.get('specifications') as FormArray;
    }
  
  addSellingPoint() {
    this.specifications.push(this.fb.group({ point: '' }));
  }

  deleteSellingPoint(index) {
    this.specifications.removeAt(index);
  }
  submit() {
    const fd=new FormData();
   
       if(this.fileData)
      {
      
       // let file_ext=this.fileDatalogo.name.split(".");
        let file_extt=this.fileData.name.split(".");
       
        fd.append('imagelogo',this.fileData,`categoryicon.${file_extt[1]}`);
        fd.append('formavalues',JSON.stringify(this.itemForm.value));
     
        this.dialogRef.close(fd)
      }
      
      else{
       
        
        fd.append('formavalues',JSON.stringify(this.itemForm.value));
     
        this.dialogRef.close(fd)
      }
    
    
    
  }

}
