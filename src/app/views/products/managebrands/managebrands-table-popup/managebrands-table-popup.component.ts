import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpService } from 'app/shared/services/http.service';


@Component({
  selector: 'app-managebrands-table-popup',
  templateUrl: './managebrands-table-popup.component.html',
  styleUrls: ['./managebrands-table-popup.component.scss']
})
export class ManagebrandsTablePopupComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Premium','Non-Premium'];
 
 

 
  
  public itemForm: FormGroup;
  fileDatalogo: File = null;
  parentCategory:string[]=[];
  fileDatasidebar: File = null;
  previewUrl:any = "assets/images/download.jpeg";
  previewUrlLogo:any="assets/images/download.jpeg";
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
  let file=fileName.split("/")[1];
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
    

    getCategories()
    {
   this.service.getAllCategory().subscribe(data=>{
     console.log(data);
     this.parentCategory.push(...data.map(({name})=>name));
   })
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

    if(Object.keys(item).length>0)
    {
  this.previewUrlLogo=this.linkImg(item.imagelogo);
  this.previewUrl=this.linkImg(item.imagesidebar);
    //this.fileDatalogo=this.linkImg(item.imagelogo);
    //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }
  
    this.itemForm = this.fb.group({
      brand: [item.brand || '', Validators.required],
      brandcategory: [item.brandcategory || ''],
      title: [item.title || ''],
      heading: [item.heading || ''],
      parentcategory : [item.parentcategory || ''],
      content:[item.content || ''],
      keywords: [item.keywords || ''],
      description: [item.description || ''],
      specifications:this.fb.array([this.fb.group({point:''})])
      
    })
  }

  ///////// This is new ////////
  get specifications() {
    return this.itemForm.get('specifications') as FormArray;
  }


  addSellingPoint() {
    this.specifications.push(this.fb.group({point:''}));
  }

  deleteSellingPoint(index) {
    this.specifications.removeAt(index);
  }


  submit() {
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


}
