import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  pasword: string;
  code: number;
  adrees: string;
  mail: string;
  constructor(public userService: MyserviceService,public router:Router) { }

  ngOnInit() {
  }
  onSubmit() {
    // console.log(this.name)
    // console.log(this.adrees)
    // console.log(this.code)
    // console.log(this.mail)
    // console.log(this.pasword)
    this.userService.insert(new user(this.code,this.name,this.adrees,this.mail,this.pasword))
    .subscribe(suc => {
      console.log(suc);
       alert(suc.userName);
         this.router.navigate(["login"]);
    }), err => {
      alert(Error);
  }
}
}
