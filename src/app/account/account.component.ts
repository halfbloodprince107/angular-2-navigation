import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor( _router:Router,private route:Router) { }

  ngOnInit() {
  }
  addNewUser(){
  // this.route.navigate(["/addnewuser"])
  this.route.navigate(["/addnewuser"])

}

}
