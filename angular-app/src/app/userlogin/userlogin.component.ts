import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
    signupUsers: any[] = [];
    signupObj:any = {
      userName: '',
      email: '',
      password: ''
    };

    loginObj:any = {
      userName: '',
      password: ''
    };

    constructor(private router: Router){}
    ngOnInit(): void { 
      const localData = localStorage.getItem('signUpUsers');
      if(localData != null){
        this.signupUsers = JSON.parse(localData);
      }
    }

    onSignUp(){
      this.signupUsers.push(this.signupObj);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
      this.signupObj = {
        userName: '',
        email: '',
        password: ''
      };
    }
      
    redirectToNewPage() {
      this.router.navigateByUrl('/dash-board');
    }

    onLogin(){
      const isUserExist = this.signupUsers.find(m=>m.userName == this.loginObj.userName && m.password == this.loginObj.password);
      if(isUserExist != undefined){
        //alert('User Login Successfully');
        this.redirectToNewPage();
      }else{
        alert('Wrong User Login');
      }
    }
}