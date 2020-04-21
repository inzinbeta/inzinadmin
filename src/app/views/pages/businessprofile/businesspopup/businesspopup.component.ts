import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpService } from '../../../../shared/services/http.service';
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { environment } from '../../../../../environments/environment';
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
  re1:File=null;
  re2:File=null;
  re3:File=null;

  previewUrl1: any = "assets/images/download.jpeg";
  previewUrl2: any = "assets/images/download.jpeg";
  previewUrl3: any = "assets/images/download.jpeg";
  previewUrl4: any = "assets/images/download.jpeg";


  rep1: any = "assets/images/download.jpeg";
  rep2: any = "assets/images/download.jpeg";
  rep3: any = "assets/images/download.jpeg";

  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BusinesspopupComponent>,
    private fb: FormBuilder,
    private service: HttpService
  ) { }






  fileProgressa(fileInput: any, num) {
  
    this.fileData = <File>fileInput.target.files[0];
    switch (num) {
      case 1:
        this.re1 = <File>fileInput.target.files[0];
        break;
      case 2:
        this.re2 = <File>fileInput.target.files[0];
        break;
      case 3:
        this.re3 = <File>fileInput.target.files[0];
        break;
    
      default:
      // code block
    }

    this.previewa(this.fileData, num);
  }

  previewa(filedata, num) {
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
          this.rep1 = reader.result;
          break;
        case 2:
          this.rep2 = reader.result;
          break;
        case 3:
          this.rep3 = reader.result;
          break;
       
        default:
        // code block
      }

    }
  }

/**
 * Related images
 */


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

    this.service.getAllTags("all")

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
      let file = fileName.replace(/\\/g, '/').split("/")[1];
      // base_URL returns localhost:3000 or the production URL
      return `http://${environment.url}:${environment.port}/${file}`;
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
      this.rep1 = this.linkImg(item.related1);
      this.rep2 = this.linkImg(item.related2);
      this.rep3 = this.linkImg(item.related3);
      //this.fileDatalogo=this.linkImg(item.imagelogo);
      //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }

    this.itemForm = this.fb.group({

      title: [item.title || ''],
      heading: [item.heading || ''],
      specifications: this.fb.array([this.fb.group({ point: '' })]),
      slug: [item.slug || '',Validators.required],
      description: [item.description || ''],
      seo_metadescription: [item.seo_metadescription || '',Validators.required],
      seo_keywords: [item.seo_keywords || '',Validators.required],
      seo_metatitle: [item.seo_metatitle || '',Validators.required],
      seo_metaheading: [item.seo_metaheading || '',Validators.required],
      seo_metaheadingdescription: [item.seo_metaheadingdescription || '',Validators.required],


    })
  }

  ///////// This is new ////////
  get specifications() {
    return this.itemForm.get('specifications') as FormArray;
  }

  onSearchChange(value)
  {
    
   let _data=value.split(/[ ,]+/g).join("-");
   delete this.itemForm.value["slug"];
   this.itemForm.setValue({"slug":_data,...this.itemForm.value});
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
        fd.append(`slider1`, this.fileData1, `categoryicon.${file_extt1[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 50:
        file_extt2 = this.fileData2.name.split(".");
        fd.append(`slider2`, this.fileData2, `categoryicon.${file_extt1[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 60:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData1, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.fileData2.name.split(".");
        fd.append(`slider2`, this.fileData2, `categoryicon.${file_extt2[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 100:
        file_extt3 = this.fileData3.name.split(".");
        fd.append(`slider3`, this.fileData3, `categoryicon.${file_extt3[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;



      case 110:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData1, `categoryicon.${file_extt1[1]}`);
        file_extt3 = this.fileData3.name.split(".");
        fd.append(`slider3`, this.fileData3, `categoryicon.${file_extt3[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 150:
        file_extt2 = this.fileData2.name.split(".");
        fd.append(`slider2`, this.fileData2, `categoryicon.${file_extt1[1]}`);
        file_extt3 = this.fileData3.name.split(".");
        fd.append(`slider3`, this.fileData3, `categoryicon.${file_extt3[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));

        break;
      case 160:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData1, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.fileData2.name.split(".");
        fd.append(`slider2`, this.fileData2, `categoryicon.${file_extt1[1]}`);
        file_extt3 = this.fileData3.name.split(".");
        fd.append(`slider3`, this.fileData3, `categoryicon.${file_extt3[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;

      case 200:
        file_extt4 = this.fileData4.name.split(".");
        fd.append(`slider4`, this.fileData4, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
      case 210:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData1, `categoryicon.${file_extt1[1]}`);
        file_extt4 = this.fileData4.name.split(".");
        fd.append(`slider4`, this.fileData4, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;

      case 250:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData1, `categoryicon.${file_extt1[1]}`);


        file_extt3 = this.fileData3.name.split(".");
        fd.append(`slider3`, this.fileData, `categoryicon.${file_extt3[1]}`);

        file_extt4 = this.fileData4.name.split(".");
        fd.append(`slider4`, this.fileData4, `categoryicon.${file_extt4[1]}`);
        fd.append('formavalues', JSON.stringify(this.itemForm.value));

        break;
        case 260:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData1, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.fileData1.name.split(".");
        fd.append(`slider2`, this.fileData2, `categoryicon.${file_extt2[1]}`);
        file_extt4 = this.fileData4.name.split(".");
        fd.append(`slider4`, this.fileData4, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));

        break;
        case 300:
        
  
          file_extt3 = this.fileData3.name.split(".");
          fd.append(`slider3`, this.fileData3, `categoryicon.${file_extt3[1]}`);
  
          file_extt4 = this.fileData4.name.split(".");
          fd.append(`slider4`, this.fileData4, `categoryicon.${file_extt4[1]}`);
  
          fd.append('formavalues', JSON.stringify(this.itemForm.value));


          case 310:
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData1, `categoryicon.${file_extt1[1]}`);
        

        file_extt3 = this.fileData3.name.split(".");
        fd.append(`slider3`, this.fileData3, `categoryicon.${file_extt3[1]}`);

        file_extt4 = this.fileData4.name.split(".");
        fd.append(`slider4`, this.fileData4, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));

        break;
        case 350:
          
          file_extt2 = this.fileData1.name.split(".");
          fd.append(`slider2`, this.fileData1, `categoryicon.${file_extt2[1]}`);
  
          file_extt3 = this.fileData3.name.split(".");
          fd.append(`slider3`, this.fileData3, `categoryicon.${file_extt3[1]}`);
  
          file_extt4 = this.fileData4.name.split(".");
          fd.append(`slider4`, this.fileData4, `categoryicon.${file_extt4[1]}`);
  
          fd.append('formavalues', JSON.stringify(this.itemForm.value));
          break;
      case 360:
       
        file_extt1 = this.fileData1.name.split(".");
        fd.append(`slider1`, this.fileData1, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.fileData2.name.split(".");
        fd.append(`slider2`, this.fileData2, `categoryicon.${file_extt2[1]}`);

        file_extt3 = this.fileData3.name.split(".");
        fd.append(`slider3`, this.fileData3, `categoryicon.${file_extt3[1]}`);

        file_extt4 = this.fileData4.name.split(".");
        fd.append(`slider4`, this.fileData4, `categoryicon.${file_extt4[1]}`);

        fd.append('formavalues', JSON.stringify(this.itemForm.value));
        break;
    }





    if(this.re1 && this.re2 && this.re3)
    {
      file_extt1 = this.re1.name.split(".");
        fd.append(`related1`, this.re1, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.re2.name.split(".");
        fd.append(`related2`, this.re2, `categoryicon.${file_extt2[1]}`);

        file_extt3 = this.re3.name.split(".");
        fd.append(`related3`, this.re3, `categoryicon.${file_extt3[1]}`);

       

    }


    else if(this.re1 && !this.re2 && !this.re3)
    {
      file_extt1 = this.re1.name.split(".");
        fd.append(`related1`, this.re1, `categoryicon.${file_extt1[1]}`);
      
       

    }

    else if(this.re1 && this.re2 && ! this.re3)
    {
      file_extt1 = this.re1.name.split(".");
        fd.append(`related1`, this.re1, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.re2.name.split(".");
        fd.append(`related2`, this.re2, `categoryicon.${file_extt2[1]}`);

        
       

    }

    else if(this.re1 && ! this.re2 && this.re3)
    {
      file_extt1 = this.re1.name.split(".");
        fd.append(`related1`, this.re1, `categoryicon.${file_extt1[1]}`);
        file_extt2 = this.re2.name.split(".");
        fd.append(`related2`, this.re2, `categoryicon.${file_extt2[1]}`);


       

    }

    else if(! this.re1 && this.re2 && this.re3)
    {
    
        file_extt2 = this.re2.name.split(".");
        fd.append(`related2`, this.re2, `categoryicon.${file_extt2[1]}`);

        file_extt3 = this.re3.name.split(".");
        fd.append(`related3`, this.re3, `categoryicon.${file_extt3[1]}`);

       

    }

   else  if(! this.re1 && this.re2 && ! this.re3)
    {
    
        file_extt2 = this.re2.name.split(".");
        fd.append(`related2`, this.re2, `categoryicon.${file_extt2[1]}`);

       

       

    }
   else  if(!this.re1 && ! this.re2 && this.re3)
    {
    

        file_extt3 = this.re3.name.split(".");
        fd.append(`related3`, this.re3, `categoryicon.${file_extt3[1]}`);

       

    }





    this.dialogRef.close(fd)



  }




}
