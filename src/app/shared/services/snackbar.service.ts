import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackbar: MatSnackBar) { }

  opensnackbar(msg: string, duration = 2000) {
    this.snackbar.open(msg,'',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration})
  }
}
