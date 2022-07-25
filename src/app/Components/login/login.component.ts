import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/logged.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:string = "";
  pass:string = "";
  constructor(public logState: LoggedService, public http:HttpClient) {

  }
  ngOnInit(): void {
  }
  log(){
      this.http.post("http://localhost:5000/auth",{email: this.user,password: this.pass}).subscribe((res: any) =>{
        if(res.data!= null){
          console.log('User logged in!');
          this.logState.userEmail = this.user;
          this.logState.userSurname = res.data.surname;
          this.logState.userFirstName = res.data.firstName;
          this.logState.userDateOfBirth = res.data.dateOfBirth;
          this.logState.logged = true;

          this.logState.newSurname=this.logState.userSurname;
          this.logState.newFirstName=this.logState.userFirstName
          this.logState.newDateOfBirth=this.logState.userDateOfBirth;
        }
      });
  }

}
