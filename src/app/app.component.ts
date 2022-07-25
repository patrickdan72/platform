import { Component } from '@angular/core';
import { LoggedService } from './logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PlatformV3';
  constructor(public logState:LoggedService){}
}
