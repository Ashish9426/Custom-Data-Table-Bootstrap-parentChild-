import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() dataChild: any;
  @Input() colHeaderChild: any;
  // @Input() iconChild: any;
  // @Input() styleChild: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.colHeaderChild)
    console.log(this.colHeaderChild[0].type)
    console.log(this.dataChild)
  }

}
