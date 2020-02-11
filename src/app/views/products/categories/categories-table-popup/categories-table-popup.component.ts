import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories-table-popup',
  templateUrl: './categories-table-popup.component.html',
  styleUrls: ['./categories-table-popup.component.scss']
})
export class CategoriesTablePopupComponent implements OnInit {

  
  public itemForm: FormGroup;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  photos = [{
    name: 'Photo 1',
    url: 'assets/images/sq-15.jpg'
  }, {
    name: 'Photo 2',
    url: 'assets/images/sq-8.jpg'
  }]
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CategoriesTablePopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
  }
  buildItemForm(item) {
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      brands: [item.brands || ''],
      metatitle: [item.metatitle || ''],
      heading: [item.heading || ''],
      phone: [item.phone || ''],
      address: [item.address || ''],
      balance: [item.balance || ''],
      isActive: [item.isActive || false]
    })
  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }

}
