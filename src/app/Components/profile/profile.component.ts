import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/logged.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public logState: LoggedService) { }

  ngOnInit(): void {
  }
  changeState(){
    this.logState.userChanging = true;
  }

}
