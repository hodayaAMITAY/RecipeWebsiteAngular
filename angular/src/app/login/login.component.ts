import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { stringify } from 'querystring';
import { user } from '../user';
import { Router } from '@angular/router';
import { strUser } from 'src/strUser';
import { recipe } from '../Recipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public userService:MyserviceService,public router:Router,public service1:recipe) { }
  u:user=new user(null,null,null,null,null);
  user1:strUser=null;
  result;
  onSubmit(){
      this.userService.LookfforUser(this.u).subscribe(suc=>{
        this.result=suc;
         if(this.result==true)
         {this.router.navigate(["all-recipes"]);
         this.user1=new strUser(this.u.userName,this.u.userPassword)}
         else if(this.result==false)this.router.navigate(["register"]);
          else alert( "your passwprd error");
        let str=JSON.stringify(this.user1)
        sessionStorage.setItem("the User",str);
        sessionStorage.setItem('showUser',this.u.userName);
        sessionStorage.setItem('pass',this.u.userPassword);
          console.log(suc);},err=>console.error());  
    }
  
  ngOnInit() {
   
  }
}
