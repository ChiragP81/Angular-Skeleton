import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ConfirmdialogService } from 'src/app/shared/services/confirmdialog.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: string = '';
  constructor(private route: Router,
    private service: AuthService,
    private dialogservice: ConfirmdialogService
  ) { }

  ngOnInit(): void {

    //showing username
    this.service.name.subscribe({
      next: (response) => {
        this.userData = response;
      }
    })

  }

  logOut() {
    this.dialogservice.confirmdialog({
      title: 'Are you sure to do logout',
      confirmText: 'Logout',
      cancelText: '',
    }).afterClosed().subscribe(
      res => {
        if(res){
          this.confirmlogout();
        }
        // res == true ? this.confirmlogout() : '';
      }
    )
  }

  confirmlogout() {
    localStorage.clear();
    this.route.navigate(['/auth']);
  }
}
