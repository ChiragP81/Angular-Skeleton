import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm/confirm.component';
import { confirm } from '../models/userdetails';

@Injectable({
  providedIn: 'root'
})
export class ConfirmdialogService {

  constructor(private dialog: MatDialog) { }


  confirmdialog(data: confirm) {
    return this.dialog.open(ConfirmComponent, {
      data,
      disableClose: true
    });

  }
}
