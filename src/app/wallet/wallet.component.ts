import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  btnText: string = "Add Sender";
  btnWidth: any = "145"
  displayedColumns = ['firstName', 'lastName', 'studentEmail', 'registrationNumber', 'course', 'action'];
  dataSource: any;

  matDialogRef!: MatDialogRef<ModalComponent>;
  dataObject: any

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = [{
      address: "Zo839893929293883ha39393ib",
      drawn: "60999976 BOA",
      remaining: "60999976 BOA",
      spendableBalance: "60999976 BOA",
      balance: "0.51515151515"

    },
    {
      address: "Zo839893929293883ha39393ib",
      drawn: "60999976 BOA",
      remaining: "60999976 BOA",
      spendableBalance: "60999976 BOA",
      balance: "0.51515151515"

    }]
  }

  OpenModal() {

    this.matDialogRef = this.matDialog.open(ModalComponent, {
      data: this.dataObject,
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      console.log("res== ", res)

      if (!!res) {
        this.dataObject = res;
        console.log(this.dataObject)
        this.dataSource.push({
          address: this.dataObject['address'],
          drawn: this.dataObject['amount'],
          remaining: this.dataObject['amount'],
          spendableBalance: this.dataObject['amount'],
          balance: this.dataObject['fee']
        })
      }
    });

  }

}
