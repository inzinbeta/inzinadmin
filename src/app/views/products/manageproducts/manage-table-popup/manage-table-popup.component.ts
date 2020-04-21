import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpService } from '../../../../shared/services/http.service';
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { ReplaySubject, Subject } from 'rxjs';
import { Bank, BANKS } from '../../../pages/availability/demo-data';
import { MatSelect } from '@angular/material/select';
import { take, takeUntil } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'app-manage-table-popup',
  templateUrl: './manage-table-popup.component.html',
  styleUrls: ['./manage-table-popup.component.scss'],
  animations: egretAnimations
})
export class ManageTablePopupComponent implements OnInit {
  toppings = new FormControl();
  colours: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  protected banks: Bank[] = BANKS;
  brands: string[] = [];

  Description = ``;
  metaHeadingDescription = ``;
  metaDescription = ``;
  slug = "";



  /**
   * Mat select search
   */


  /** control for the selected bank for multi-selection */
  public bankMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();




  /**
   * MAt select search
   */



  public items: Object;

  public items_tags: Object;
  public items_brands: Object;
  public items_categories: Object;
  public items_allcategories: any = [];
  public items_subcategories: any = [];
  public itemForm: FormGroup;
  fileData: File = null;
  previewUrl: any = "assets/images/download.jpeg";
  previewUrlLogo: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ManageTablePopupComponent>,
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
    this.bankMultiCtrl.setValue(this.data.payload.tags);
    this.getItems()
    this.getTags()
    this.getBrands()
    this.getCategories();

    this.Description = this.data.payload.description || ``;
    this.metaHeadingDescription = this.data.payload.seo_metaheadingdescription || ``;
    this.metaDescription = this.data.payload.seo_metadescription || ``;




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

        let banks = data.map(ele => {
          return {
            name: ele["name"],
            id: ele["_id"]
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

  onSearchChange(value) {

    let _data = value.split(/[ ,]+/g).join("-");
    delete this.itemForm.value["slug"];
    this.itemForm.setValue({ "slug": _data, ...this.itemForm.value });
  }
  getItems() {

    this.service.getAllProducts()

      .subscribe(data => {

        this.items = data;
      })
  }

  getChildCategories(value) {

    this.items_subcategories = this.items_allcategories.filter(ele => ele.parentcategory == value);
 
  }


  getTags() {

    this.service.getAllTags("Product")

      .subscribe(data => {

        this.items_tags = data;

        let _tag = data.map(ele => {
          return {
            name: ele["name"],
            id: ele["_id"]
          }

        })
/**Important for select search multi */

        if (Object.keys(this.data.payload).length == 0) {
          // set initial selection
          this.bankMultiCtrl.setValue([this.data.payload.tags]);

        }


        // load the initial bank list
        this.filteredBanksMulti.next(_tag.slice());


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
    let file=fileName.replace(/\\/g, '/').split("/")[1];
    // base_URL returns localhost:3000 or the production URL
        return `http://${environment.url}:${environment.port}/${file}`;
      }


  buildItemForm(item) {

    if (Object.keys(item).length > 0) {
      // this.previewUrlLogo=this.linkImg(item.imagelogo);
      this.previewUrl = this.linkImg(item.imagelogo);
      //this.fileDatalogo=this.linkImg(item.imagelogo);
      //this.fileDatasidebar=this.linkImg(item.imagesidebar);
    }
    /**
     * Creating form group array with specifications
     */
    let form_group = []
    if (item.specifications) {
      form_group = item.specifications.map(ele => {
        return this.fb.group({ point: ele.point })
      })


    }

   


    this.itemForm = this.fb.group({


      brand: [item.brand || ''],

      category: [item.category || ''],
      subcategory: [item.subcategory || ''],


      colour: [item.colour || ''],
      size: [item.size || ''],
      name: [item.name || ''],
      slug: [item.slug || ''],
      stock: [item.stock || ''],
      specifications: this.fb.array([ ...form_group]),

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




    this.itemForm.value.tags = this.bankMultiCtrl.value;

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
