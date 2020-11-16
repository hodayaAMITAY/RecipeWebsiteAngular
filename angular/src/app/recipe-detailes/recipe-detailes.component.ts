import { Component, OnInit } from '@angular/core';
import { recipe } from '../Recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { flatten } from '@angular/compiler';
import { strUser } from 'src/strUser';


@Component({
  selector: 'app-recipe-detailes',
  templateUrl: './recipe-detailes.component.html',
  styleUrls: ['./recipe-detailes.component.css']
})
export class RecipeDetailesComponent implements OnInit {

  constructor(public active:ActivatedRoute, public ser:RecipeService,public router:Router) { }
name;
myarr:recipe;
link:boolean;
str:string;
user1:strUser;
  ngOnInit() { 
    this.active.params.subscribe(suc=>{
      this.name=suc["recipeName"];
      this.ser.getrecipedetails(this.name).subscribe(suc=>{this.myarr=suc;
      this.user1=new strUser(this.myarr.user.userName,this.myarr.user.userPassword.toString());
      let str=JSON.stringify(this.user1);
        if(sessionStorage.getItem('the User')==str)
        {this.link=true;}
        else{this.link=false;}
      },err=>alert(err))
    })
  }
 

    


}
