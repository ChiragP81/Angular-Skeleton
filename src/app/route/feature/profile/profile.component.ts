import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { user } from "../../../shared/models/userdetails";
import { MatDialog } from '@angular/material/dialog';
import { FormdataComponent } from '../../../shared/components/formdata/formdata.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  userData!: user;
  constructor(public service:AuthService,
    public dialog:MatDialog) { }

  ngOnInit(): void {
  this.getname()
  }

  getname(){
    this.service.userInfo.subscribe({
      next:(response:any)=>{
        this.userData = response;
      }
    })
  }

  editdata(userData:any){
    this.dialog.open(FormdataComponent, {
      data:userData
    }).afterClosed().subscribe(res=>{
      if(res=='update'){
        this.getname();
      }
    })
  }

}
