import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username="admin";

  constructor() { }
password: string;
  ngOnInit() {
    this.username == 'admin' 
  }
  
  }