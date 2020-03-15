import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpService } from 'app/shared/services/http.service';
import { CategoryModel } from 'app/shared/models/CategoryModel';
import { CategoriesComponent } from '../../categories/categories.component';


@Component({
  selector: 'app-managebrands-table-popup',
  templateUrl: './managebrands-table-popup.component.html',
  styleUrls: ['./managebrands-table-popup.component.scss']
})
export class ManagebrandsTablePopupComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Premium', 'Non-Premium'];
  subcategories:string[]=[]; // these will be changed when categories is chnaged
  parentcatgeories:any[]=[];





  public itemForm: FormGroup;
  fileDatalogo: File = null;
  parentCategory: string[] = [];
  fileDatasidebar: File = null;
  previewUrl: any = "assets/images/download.jpeg";
  previewUrlLogo: any = "assets/images/download.jpeg";
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ManagebrandsTablePopupComponent>,
    private fb: FormBuilder,
    private service: HttpService
  ) { }

  fileProgress1(fileInput: any) {
    this.fileDatalogo = <File>fileInput.target.files[0];
    this.preview1();
  }



  linkImg(fileName) {
    let file = fileName.split("/")[1];
    // base_URL returns localhost:3000 or the production URL
    return `http://localhost:3900/${file}`;
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


  getCategories() {
    this.service.getAllCategory().subscribe(data => {
      console.log(data);
      this.parentcatgeories.push(...data);
      this.parentCategory.push(...data.reduce((acc, ele) => {

        if (ele.isParent) {
          acc.push(ele.name);
        }
        return acc;

      }, []));
    })
  }

getSubCategories(catgeory)
{
  
  
  this.subcategories.push(...this.parentcatgeories.reduce((acc, ele) => {
    console.log(ele.parentcategory);

    if (ele.parentcategory==catgeory) {
      console.log(ele.name)
      acc.push(ele.name);
    }
    return acc;

  }, []));
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

  ngOnInit() {
    this.buildItemForm(this.data.payload);
    this.getCategories();
  }
  buildItemForm(item) {

    if (Object.keys(item).length > 0) {
      this.previewUrlLogo = this.linkImg(item.imagelogo);
      this.previewUrl = this.linkImg(item.imagesidebar);
      //this.fileDatalogo=this.linkImg(item.imagelogo);
      //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }

    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      brandcategory: [item.brandcategory || ''],
      title: [item.title || ''],
      heading: [item.heading || ''],
      parentcategory: [item.parentcategory || ''],
      subcategory: [item.subcategory || ''],
      content: [item.content || ''],
      keywords: [item.keywords || ''],
      description: [item.description || ''],
      specifications: this.fb.array([this.fb.group({ point: '' })]),
      seo_keywords: [item.seo_keyword || ''],
      seo_metadescription: [item.seo_metadescription || ''],
      seo_metatitle: [item.seo_metatitle || ''],
      seo_metaheading: [item.seo_metaheading || ''],
      seo_metaheadingdescription: [item.seo_metaheadingdescription || ''],
      mobile: [item.mobile || ''],
      address: [item.address || ''],
      email: [item.email || ''],
      web: [item.web || ''],
      socialmedia: [item.socialmedia || ''],
      //Requirements
      cnf: [item.cnf || ''],
      cnfarea: [item.cnfarea || ''],
      cnfinvestment: [item.cnfinvestment || ''],
      cnfsalesteam: [item.cnfsalesteam || ''],
      distributor: [item.distributor || ''],
      distributorarea: [item.distributorarea || ''],
      distributorinvestment: [item.distributorinvestment || ''],
      distributorsalesteam: [item.distributorsalesteam || ''],
      ////
      dealer: [item.dealer || ''],
      dealerarea: [item.dealerarea || ''],
      dealerinvestment: [item.dealerinvestment || ''],
      dealersalesteam: [item.dealersalesteam || ''],
      workshop: [item.workshop || ''],
      workshoparea: [item.workshoparea || ''],
      workshopinvestment: [item.workshopinvestment || ''],
      workshopsalesteam: [item.workshopsalesteam || ''],


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
    console.log(this.itemForm.value);
    const fd = new FormData();

    if (this.fileDatalogo && !this.fileDatasidebar) {
      let file_ext = this.fileDatalogo.name.split(".");

      fd.append('imagelogo', this.fileDatalogo, `categoryicon.${file_ext[1]}`);

      fd.append('formavalues', JSON.stringify(this.itemForm.value));

      this.dialogRef.close(fd)
    }
    else if (!this.fileDatalogo && this.fileDatasidebar) {
      // let file_ext=this.fileDatalogo.name.split(".");
      let file_extt = this.fileDatasidebar.name.split(".");

      fd.append('imagesidebar', this.fileDatasidebar, `categoryicon.${file_extt[1]}`);
      fd.append('formavalues', JSON.stringify(this.itemForm.value));

      this.dialogRef.close(fd)
    }
    else if (this.fileDatalogo && this.fileDatasidebar) {
      let file_ext = this.fileDatalogo.name.split(".");
      let file_extt = this.fileDatasidebar.name.split(".");
      fd.append('imagelogo', this.fileDatalogo, `categoryicon.${file_ext[1]}`);
      fd.append('imagesidebar', this.fileDatasidebar, `categoryicon.${file_extt[1]}`);
      fd.append('formavalues', JSON.stringify(this.itemForm.value));

      this.dialogRef.close(fd)
    }
    else {
      console.log(this.fileDatalogo);
      //fd.append('imagelogo',this.fileDatalogo,`categoryicon.${file_ext[1]}`);
      //fd.append('imagesidebar',this.fileDatasidebar,`categoryicon.${file_extt[1]}`);
      fd.append('formavalues', JSON.stringify(this.itemForm.value));

      this.dialogRef.close(fd)
    }

  }


}
