import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpService } from '../../../../shared/services/http.service';
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { Bank, BANKS } from '../demo-data';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild,Inject } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
@Component({
  selector: 'app-availabilitypopup',
  templateUrl: './availabilitypopup.component.html',
  styleUrls: ['./availabilitypopup.component.scss'],
  animations: egretAnimations
})
export class AvailabilitypopupComponent implements OnInit {
 public states:any=["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];
  public items: Object;
  public businessprofile:any=[];

  public items_tags: Object;
  public items_brands: Object;
  public items_categories: Object;
  public items_allcategories: any = [];
  public items_subcategories: any = [];
  public itemForm: FormGroup;

    /** list of banks */
    protected banks: Bank[] = BANKS;

    public colours: any[] = ["Booked","Available"];

    /** control for the selected bank for multi-selection */
    public bankMultiCtrl: FormControl = new FormControl();
  
    /** control for the MatSelect filter keyword multi-selection */
    public bankMultiFilterCtrl: FormControl = new FormControl();
  
    /** list of banks filtered by search keyword */
    public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
  
    @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;
  
    /** Subject that emits when the component has been destroyed. */
    protected _onDestroy = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AvailabilitypopupComponent>,
    private fb: FormBuilder,
    private service: HttpService
  ) { }



getBusinessProfile()
{
  this.service.getBusinessProfile().subscribe(data=>{
  this.businessprofile=data["data"].map(ele=>ele.title);

  })
}



  ngOnInit() {

    this.buildItemForm(this.data.payload)


    this.getBrands();
    this.getBusinessProfile();

 // set initial selection
 this.bankMultiCtrl.setValue([]);

 // load the initial bank list
 this.filteredBanksMulti.next(this.banks.slice());

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

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
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
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksMulti.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(
      this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }


  getBrands() {

    this.service.getAllBrands()

      .subscribe(data => {

        this.items_brands = data.map(ele => {
          
          return {
            name :ele["name"],
            id:ele["_id"]
          }
          });

      })
  }




  buildItemForm(item) {



    this.itemForm = this.fb.group({

      brand: [item.brand || ''],
      availability:[item.availability],
      state:[item.state],
      businessprofile:[item.businessprofile]


    })
  }

  submit() {
    this.itemForm.value.district=this.bankMultiCtrl.value;

    let data=this.itemForm.value.district.reduce((acc,ele)=>{

      acc["districts"].push({name:ele.name,id:ele.id});
      acc["status"]=this.itemForm.value.availability;
     
return acc;
    },{districts:[],status:""})
    console.log(this.itemForm.value.brand);
    let _brand=this.itemForm.value.brand.split("-");
    this.dialogRef.close({districts:data["districts"],brandid:_brand[0],brandname:_brand[1],status:data["status"],businessprofile:this.itemForm.value.businessprofile,state:this.itemForm.value.state});
  }
}