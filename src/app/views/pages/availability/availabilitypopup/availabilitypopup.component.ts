import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpService } from '../../../../shared/services/http.service';
import { egretAnimations } from "../../../../shared/animations/egret-animations";

@Component({
  selector: 'app-availabilitypopup',
  templateUrl: './availabilitypopup.component.html',
  styleUrls: ['./availabilitypopup.component.scss'],
  animations: egretAnimations
})
export class AvailabilitypopupComponent implements OnInit {

  
  toppings = new FormControl();
  colours: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  brands: string[] = [];

  Description = ``;
 


  public items: Object;

  public items_tags: Object;
  public items_brands: Object;
  public items_categories: Object;
  public items_allcategories: any = [];
  public items_subcategories: any = [];
  public itemForm: FormGroup;
  fileData: File = null;
  previewUrl: any = "assets/images/download.jpeg";
  previewUrlLogo: any = "assets/images/download.jpeg";
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AvailabilitypopupComponent>,
    private fb: FormBuilder,
    private service: HttpService
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
    this.getItems()

    this.getBrands()
    

    this.Description = this.data.payload.description || ``;
   

  }

  linkImg(fileName) {
    let file=fileName.split("/")[1];
    // base_URL returns localhost:3000 or the production URL
        return `http://localhost:3900/${file}`;
      }


  getItems() {

    this.service.getAllProducts()

      .subscribe(data => {

        this.items = data;
      })
  }



  getBrands() {

    this.service.getAllBrands()

      .subscribe(data => {

        this.items_brands = data.map(ele=>ele["name"]);
        
      })
  }
 



  buildItemForm(item) {

    if(Object.keys(item).length>0)
    {
  this.previewUrlLogo=this.linkImg(item.imagelogo);
  
    //this.fileDatalogo=this.linkImg(item.imagelogo);
    //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }

    this.itemForm = this.fb.group({
     
     brand: [item.brand || ''],
    city: [item.city || ''],
    state: [item.state || ''],


    })
  }

  submit() {
    const fd = new FormData();

    if (this.fileData) {

      // let file_ext=this.fileDatalogo.name.split(".");
      let file_extt = this.fileData.name.split(".");

      fd.append('imagelogo', this.fileData, `categoryicon.${file_extt[1]}`);
      fd.append('formavalues', JSON.stringify(this.itemForm.value));

      this.dialogRef.close(fd)
    }

    else {


      fd.append('formavalues', JSON.stringify(this.itemForm.value));

      this.dialogRef.close(fd)
    }
}
}