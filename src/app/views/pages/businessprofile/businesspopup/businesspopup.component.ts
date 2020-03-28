import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpService } from '../../../../shared/services/http.service';
import { egretAnimations } from "../../../../shared/animations/egret-animations";

@Component({
  selector: 'app-businesspopup',
  templateUrl: './businesspopup.component.html',
  styleUrls: ['./businesspopup.component.scss'],
  animations: egretAnimations
})
export class BusinesspopupComponent implements OnInit {

  toppings = new FormControl();
  colours: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  brands: string[] = [];

  Description = ``;
  metaHeadingDescription = ``;
  metaDescription = ``;



  public items: Object;

  public items_tags: Object;
  public items_brands: Object;
  public items_categories: Object;
  public items_allcategories: any = [];
  public items_subcategories: any = [];
  public itemForm: FormGroup;
  fileData: File = null;
  fileData1: File = null;
  fileData2: File = null;
  fileData3: File = null;
  fileData4: File = null;
  previewUrl1: any = "assets/images/download.jpeg";
  previewUrl2: any = "assets/images/download.jpeg";
  previewUrl3: any = "assets/images/download.jpeg";
  previewUrl4: any = "assets/images/download.jpeg";

  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BusinesspopupComponent>,
    private fb: FormBuilder,
    private service: HttpService
  ) { }






  fileProgress(fileInput: any, num) {
  
    this.fileData = <File>fileInput.target.files[0];
    switch (num) {
      case 1:
        this.fileData1 = <File>fileInput.target.files[0];
        break;
      case 2:
        this.fileData2 = <File>fileInput.target.files[0];
        break;
      case 3:
        this.fileData3 = <File>fileInput.target.files[0];
        break;
      case 4:
        this.fileData4 = <File>fileInput.target.files[0];
        break;
      default:
      // code block
    }

    this.preview(this.fileData, num);
  }

  preview(filedata, num) {
    // Show preview 
    var mimeType = filedata.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      switch (num) {
        case 1:
          this.previewUrl1 = reader.result;
          break;
        case 2:
          this.previewUrl2 = reader.result;
          break;
        case 3:
          this.previewUrl3 = reader.result;
          break;
        case 4:
          this.previewUrl4 = reader.result;
          break;
        default:
        // code block
      }

    }
  }
  ngOnInit() {
    console.log("page");
    this.buildItemForm(this.data.payload)
    this.getItems()
    this.getTags()
    this.getBrands()
    this.getCategories();

    this.Description = this.data.payload.description || ``;
    this.metaHeadingDescription = this.data.payload.seo_metaheadingdescription || ``;
    this.metaDescription = this.data.payload.seo_metadescription || ``;

  }

  getItems() {

    this.service.getAllProducts()

      .subscribe(data => {

        this.items = data;
      })
  }

  getChildCategories(value) {

    this.items_subcategories = this.items_allcategories.filter(ele => ele.parentcategory == value.name);
  }


  getTags() {

    this.service.getAllTags()

      .subscribe(data => {

        this.items_tags = data;
        console.log(data);
      })
  }
  getBrands() {

    this.service.getAllBrands()

      .subscribe(data => {

        this.items_brands = data;
        console.log(data);
      })
  }
  getCategories() {
    this.service.getAllCategory()

      .subscribe(data => {
        this, this.items_allcategories = data;
        this.items_categories = data.filter(ele => ele.isParent);

        console.log(data);
      })
  }
  linkImg(fileName) {
    if (fileName) {
      let file = fileName.split("/")[1];
      // base_URL returns localhost:3000 or the production URL
      return `http://localhost:3900/${file}`;
    }

    else {
      return this.previewUrl1;
    }

  }


  buildItemForm(item) {

    if (Object.keys(item).length > 0) {
      // this.previewUrlLogo=this.linkImg(item.imagelogo);
      this.previewUrl1 = this.linkImg(item.slider1);
      this.previewUrl2 = this.linkImg(item.slider2);
      this.previewUrl3 = this.linkImg(item.slider3);
      this.previewUrl4 = this.linkImg(item.slider4);
      //this.fileDatalogo=this.linkImg(item.imagelogo);
      //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }

    this.itemForm = this.fb.group({

      title: [item.title || ''],
      heading: [item.heading || ''],
      specifications: this.fb.array([this.fb.group({ point: '' })]),

      description: [item.description || ''],


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
    const fd = new FormData();


    const i = (this.fileData1 ? 10 : 0) + (this.fileData2 ? 50 : 0) + (this.fileData3 ? 100 : 0) + (this.fileData4 ? 200 : 0);

    let file_extt1;
    let file_extt2;
    let file_extt3;
    let file_extt4;

    switch (i) {
      case 0:
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 10:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData, `categoryicon.${file_extt1[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 50:
        file_extt2 = this.fileData2.name.split(".");
        fd.append(`slider2`, this.fileData, `categoryicon.${file_extt1[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 60:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.fileData1.name.split(".");
        fd.append(`slider2`, this.fileData, `categoryicon.${file_extt2[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 100:
        file_extt3 = this.fileData1.name.split(".");
        fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;



      case 110:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData, `categoryicon.${file_extt1[1]}`);
        file_extt3 = this.fileData1.name.split(".");
        fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 150:
        file_extt2 = this.fileData2.name.split(".");
        fd.append(`slider2`, this.fileData, `categoryicon.${file_extt1[1]}`);
        file_extt3 = this.fileData1.name.split(".");
        fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));

        break;
      case 160:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.fileData2.name.split(".");
        fd.append(`slider2`, this.fileData, `categoryicon.${file_extt1[1]}`);
        file_extt3 = this.fileData1.name.split(".");
        fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;

      case 200:
        file_extt4 = this.fileData1.name.split(".");
        fd.append(`slider4`, this.fileData, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 210:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData, `categoryicon.${file_extt1[1]}`);
        file_extt4 = this.fileData1.name.split(".");
        fd.append(`slider4`, this.fileData, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;

      case 250:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData, `categoryicon.${file_extt1[1]}`);


        file_extt3 = this.fileData1.name.split(".");
        fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);

        file_extt4 = this.fileData1.name.split(".");
        fd.append(`slider4`, this.fileData, `categoryicon.${file_extt4[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));

        break;
        case 260:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.fileData1.name.split(".");
        fd.append(`slider2`, this.fileData, `categoryicon.${file_extt2[1]}`);
        file_extt4 = this.fileData1.name.split(".");
        fd.append(`slider4`, this.fileData, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));

        break;
        case 300:
        
  
          file_extt3 = this.fileData1.name.split(".");
          fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);
  
          file_extt4 = this.fileData1.name.split(".");
          fd.append(`slider4`, this.fileData, `categoryicon.${file_extt4[1]}`);
  
          fd.append('formavalues', JSON.stringify(this.itemForm.value));


          case 310:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData, `categoryicon.${file_extt1[1]}`);
        

        file_extt3 = this.fileData1.name.split(".");
        fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);

        file_extt4 = this.fileData1.name.split(".");
        fd.append(`slider4`, this.fileData, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));

        break;
        case 350:
          
          file_extt2 = this.fileData1.name.split(".");
          fd.append(`slider2`, this.fileData, `categoryicon.${file_extt2[1]}`);
  
          file_extt3 = this.fileData1.name.split(".");
          fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);
  
          file_extt4 = this.fileData1.name.split(".");
          fd.append(`slider4`, this.fileData, `categoryicon.${file_extt4[1]}`);
  
          fd.append('formavalues', JSON.stringify(this.itemForm.value));
          break;
      case 360:
       
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.fileData1.name.split(".");
        fd.append(`slider2`, this.fileData, `categoryicon.${file_extt2[1]}`);

        file_extt3 = this.fileData1.name.split(".");
        fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);

        file_extt4 = this.fileData1.name.split(".");
        fd.append(`slider4`, this.fileData, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
    }









    this.dialogRef.close(fd)



  }




}
