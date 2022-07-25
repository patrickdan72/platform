import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoggedService } from 'src/app/logged.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  password:string="";
  constructor(public logState:LoggedService, public http:HttpClient, public snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

}
