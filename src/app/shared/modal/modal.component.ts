
import { Component, Input, Inject, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  btnWidth: string = "80"
  btnText: string = "Send"
  cancelBtnWidth: string = "80"
  cancelBtnText: string = "Cancel";
  formGroup: FormGroup;

  constructor(private _mdr: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      'address': [null],
      'amount': [null],
      'option': [null],
      'fee': [null],
    });

  }

  ngOnInit(): void {
  }

  CloseDialog() {
    this._mdr.close(false)
  }

  onSubmit(formValues: any) {
    console.log("formValues== ", formValues)
    this.data = formValues;
  }
}
