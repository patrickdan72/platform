import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  logged:boolean = false;
  userEmail:string="";

  userSurname:string = "";
  userFirstName:string = "";
  userDateOfBirth:string = "";

  userChanging:boolean = false;
  newSurname:string="";
  newFirstName:string="";
  newDateOfBirth:string="";

  constructor(public http:HttpClient, public snackBar:MatSnackBar) { }

  update(password: string){
    this.http.put("http://localhost:5000/users",{email: this.userEmail,surname: this.newSurname,firstName: this.newFirstName,dateOfBirth: this.newDateOfBirth,password: password}).subscribe((res:any)=>{
      console.log(res);
      if(res.email){
        this.userSurname=this.newSurname;
        this.userFirstName=this.newFirstName;
        this.userDateOfBirth=this.newDateOfBirth;
        this.snackBar.open('User data changed succesfully!',undefined,{
          duration:2000
        });
      }
      else{
        this.newSurname=this.userSurname;
        this.newFirstName=this.userFirstName;
        this.newDateOfBirth=this.userDateOfBirth;
        this.snackBar.open('Wrong password!',undefined,{
          duration:2000
        });
      }
    });
    this.userChanging = false;
  }
}
