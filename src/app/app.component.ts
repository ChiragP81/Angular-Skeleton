import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Miniapp';

  constructor(private swUpdate: SwUpdate) {
    //  checking the current version and available version of app(hash)
    swUpdate.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    swUpdate.activated.subscribe(event => {
      console.log('old version is', event.previous);
      console.log('current version is', event.current);
    })


    // forcing update activation
    swUpdate.available.subscribe(event=>{
      if(event){

        swUpdate.activateUpdate().then(()=>{
          document.location.reload();
        })
      }
    })


    // Handling recoverable code

    swUpdate.unrecoverable.subscribe(event => {
      console.log('An error occurred we cannot recover from:\n'+
      event.reason + '\n\n Please relaod the page.');

    })

  }
    ngOnInit(): void {
    }
}



