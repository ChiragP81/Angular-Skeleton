import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormdataComponent } from 'src/app/shared/components/formdata/formdata.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ConfirmdialogService } from 'src/app/shared/services/confirmdialog.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator)
  Paginator!: MatPaginator;




  displayedColumns: string[] = ['id', 'fname', 'email', 'phone','dob', 'age', 'gender', 'actions'];
  dataSource!: MatTableDataSource<any>;


  constructor(private service: AuthService,
    private dialog: MatDialog,
    public dialogservice: ConfirmdialogService,
    public snackbar: SnackbarService) {
  }

  ngOnInit(): void {
    this.getdetails();
  }

  adddata() {
    this.dialog.open(FormdataComponent, {
      disableClose: true
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getdetails();
      }
    })
  }

  getdetails() {
    this.service.getuser().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.Paginator;
        this.dataSource.sort = this.sort;

      }, error: (err) => {
        console.log(err);
      }
    })
  }


  editdata(element: any) {
    this.dialog.open(FormdataComponent, {
      data: element
    }).afterClosed().subscribe(val => {
      if (val == 'update') {
        this.getdetails();
      }
    })
  }


  deletedata(id: number) {
    this.dialogservice.confirmdialog({
      title: 'Are you sure to Delete',
      confirmText: 'Delete',
      cancelText: '',
    }).afterClosed().subscribe(
      res => {
        res == true ? this.confirmdel(id) : '';
      }
    )
  }


  confirmdel(id: number) {
    let data = this.service.deleteuser(id);
    data.subscribe({
      next: () => {
        this.snackbar.opensnackbar('user details deleted successfuly');
        this.getdetails();
      },
      error: () => {
        this.snackbar.opensnackbar('There is error occuring...')
      }
    })
  }

  //this is used for sorting in table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
