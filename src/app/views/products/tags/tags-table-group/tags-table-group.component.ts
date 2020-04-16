import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tags-table-group',
  templateUrl: './tags-table-group.component.html',
  styleUrls: ['./tags-table-group.component.scss']
})
export class TagsTableGroupComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Product', 'Brand'];
 
  public itemForm: FormGroup;
 
  fileData: File = null;
previewUrl:any = null;
previewUrlLogo:any=null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TagsTableGroupComponent>,
    private fb: FormBuilder,
  ) { }

  fileProgress1(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview1();
}


onSearchChange(value)
 {
   
  let _data=value.split(/[ ,]+/g).join("-");
  delete this.itemForm.value["slug"];
  this.itemForm.setValue({"slug":_data,...this.itemForm.value});
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
  }
  buildItemForm(item) {
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      slug: [item.slug || ''],
      description: [item.description || ''],
      type:[item.type || '']
    })
  }

  submit() {
    console.log(this.itemForm.value);
    this.dialogRef.close(this.itemForm.value)
  }


}
