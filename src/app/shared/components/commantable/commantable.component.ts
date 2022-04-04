import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commantable',
  templateUrl: './commantable.component.html',
  styleUrls: ['./commantable.component.css']
})
export class CommantableComponent implements OnInit {

@Input() tabledata:any;
  constructor() { }

  ngOnInit(): void {

  }

  displayedColumns=['position','name','weight','symbol'];
  columnsToDisplay = this.displayedColumns;


}
