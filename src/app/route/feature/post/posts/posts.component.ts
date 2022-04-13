import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormdataComponent } from 'src/app/shared/components/formdata/formdata.component';
import { user } from 'src/app/shared/models/userdetails';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private service: AuthService,
    private dialog:MatDialog) { }
  userDetails!: user[];


  ngOnInit(): void {
    this.getdetails();
  }

  getdetails() {
    this.service.getuser().subscribe({
      next: (res: any) => {
        this.userDetails = res;

      },
      error: (err) => {
        console.log('There is some error occur', err)
      }
    })
  }

  editData(userDetails:any) {
    this.dialog.open(FormdataComponent, {
      data: userDetails
    }).afterClosed().subscribe(val => {
      if (val == 'update') {
        this.getdetails();
      }
    })
  }
  deleteData(){
    console.log('deletedata');
  }
}
