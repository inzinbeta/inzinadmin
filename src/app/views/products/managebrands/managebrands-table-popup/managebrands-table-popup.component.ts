import { Component, OnInit, Inject,ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpService } from 'app/shared/services/http.service';
import { ReplaySubject, Subject } from 'rxjs';
import { Bank, BANKS } from '../../../pages/availability/demo-data';
import { MatSelect } from '@angular/material/select';
import { take, takeUntil } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-managebrands-table-popup',
  templateUrl: './managebrands-table-popup.component.html',
  styleUrls: ['./managebrands-table-popup.component.scss']
})
export class ManagebrandsTablePopupComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Premium', 'Non-Premium'];
  public items_tags: Object;
  subcategories:string[]=[]; // these will be changed when categories is chnaged
  parentcatgeories:any[]=[];
  description:string="Enter Description Here";
  metadescription:string="Enter Meta Description Here";
  metaheadingdescription:string="Enter Meta Heading Description Here";
  services:string[]=[];
  selectedservice:string[]=[];

/** control for the selected bank for multi-selection */
public bankMultiCtrl: FormControl = new FormControl();
  
/** control for the MatSelect filter keyword multi-selection */
public bankMultiFilterCtrl: FormControl = new FormControl();

/** list of banks filtered by search keyword */
public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

@ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

/** Subject that emits when the component has been destroyed. */
protected _onDestroy = new Subject<void>();


  public itemForm: FormGroup;
  fileDatalogo: File = null;
  parentCategory: string[] = [];
  fileDatasidebar: File = null;
  previewUrl: any = "assets/images/download.jpeg";
  previewUrlLogo: any = "assets/images/download.jpeg";
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  protected banks: Bank[] = BANKS;
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
    let file=fileName.replace(/\\/g, '/').split("/")[1];
    // base_URL returns localhost:3000 or the production URL
        return `http://${environment.url}:${environment.port}/${file}`;
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


  onSearchChange(value)
 {
   
  let _data=value.split(/[ ,]+/g).join("-");
  delete this.itemForm.value["slug"];
  this.itemForm.setValue({"slug":_data,...this.itemForm.value});
 }

  getCategories() {
    this.service.getAllCategory().subscribe(data => {
    
      this.parentcatgeories.push(...data);
      this.parentCategory.push(...data.reduce((acc, ele) => {

        if (ele.isParent) {
          acc.push(ele.name);
        }
        return acc;

      }, []));
    })
  }

  getTags(){
  
    this.service.getAllTags("Brand")
  
      .subscribe(data => {
        
        this.items_tags = data;
  
        let _tag=data.map(ele=>{
          return{
            name:ele["name"],
            id:ele["_id"]
          }
  
        })
  
        if(Object.keys(this.data.payload).length>0)
  
        {
                 // set initial selection
   this.bankMultiCtrl.setValue([this.data.payload.tags]);
  
        }
  
  
   // load the initial bank list
   this.filteredBanksMulti.next(_tag.slice());
  
      
      })
  }
getSubCategories(catgeory)
{
  
  this.subcategories=[];
  
  this.subcategories.push(...this.parentcatgeories.reduce((acc, ele) => {
    
      
    if (catgeory.includes(ele.parentcategory)) {
     
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

  buildItemForm(item) {

    if (Object.keys(item).length > 0) {
      this.previewUrlLogo = this.linkImg(item.imagelogo);
      this.previewUrl = this.linkImg(item.imagesidebar);
      //this.fileDatalogo=this.linkImg(item.imagelogo);
      //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }


    let form_group = []
    if (item.specifications) {
      form_group = item.specifications.map(ele => {
        return this.fb.group({ point: ele.point })
      })


    }
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      brandcategory: [item.brandcategory || ''],
      slug: [item.slug || ''],
      tags:[item.tags || ''],
      parentcategory: [item.parentcategory || ''],
      subcategory: [item.subcategory || ''],
    
    
      description: [item.description || ''],
      specifications: this.fb.array([...form_group]),
      seo_keywords: [item.seo_keywords || ''],
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

getServices()
{


  let existing={}
  if( this.data.payload.services){
    existing= this.data.payload.services.reduce((acc,curr)=>{
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
    
      return acc;
    
      },{})
    
  
  }
  this.service.getAllServices().subscribe(data=>{
this.services.push(...data.reduce((acc,ele:any)=>{


if(existing[ele.title])
{
  acc.push({title:ele.title,checked:true});
}
else{
  acc.push({title:ele.title,checked:false});
}
return acc;
},[]))



  })
}


  submit() {
    this.itemForm.value.tags = this.bankMultiCtrl.value;
    this.itemForm.value["services"]=this.selectedservice;
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
checkboxtoggle(event)
{
  console.log(event.checked);
  if(event.checked)
  {
this.selectedservice.push(event.source.value)
  }
  else{
    this.selectedservice=this.selectedservice.filter(ele=>ele!=event.source.value);

  }
}



protected setInitialValue() {
    
  this.filteredBanksMulti
    .pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.multiSelect.compareWith = (a: Bank, b: Bank) => a && b && a.id === b.id;
    });
}

protected filterBanksMulti() {
 

  this.service.getAllTags("Product")

  .subscribe(data => {
    
    this.items_tags = data;

    let banks=data.map(ele=>{
      return{
        name:ele["name"],
        id:ele["_id"]
      }

    })
     
    if (!banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksMulti.next(banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(
      banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  
  })


  
}


  ngOnInit() {
    console.log(this.data.payload);
    this.buildItemForm(this.data.payload);
    this.getCategories();
    this.getTags();
    this.getServices();

    this.description=this.data.payload.description || "";
    this.metadescription=this.data.payload.seo_metadescription || "";
    this.metaheadingdescription=this.data.payload.seo_metaheadingdescription || "";


     // listen for search field value changes
 this.bankMultiFilterCtrl.valueChanges
 .pipe(takeUntil(this._onDestroy))
 .subscribe(() => {
   this.filterBanksMulti();
 });
  }


  ngAfterViewInit() {
    this.setInitialValue();
   }
 
   ngOnDestroy() {
     this._onDestroy.next();
     this._onDestroy.complete();
   }
 

}
