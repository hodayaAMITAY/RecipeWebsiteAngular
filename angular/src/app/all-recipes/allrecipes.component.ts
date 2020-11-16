import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { RecipeService } from '../recipe.service';
import { recipe } from '../Recipe';
import { Router } from '@angular/router';
import { category } from '../Category';
@Component({
  selector: 'app-allrecipes',
  templateUrl: './allrecipes.component.html',
  styleUrls: ['./allrecipes.component.css']
})
export class AllrecipesComponent implements OnInit { 
  constructor(public ser:RecipeService,public router:Router) { }
  arr:recipe[];
  v:boolean=false;
  ezerarr:recipe[];
  categoryArr:category;
  name:string="";
  time:number=0;
  u:string;
  category:string="";
  addRecipe(){this.router.navigate(["add"])};
  ngOnInit() {
    this.ser.getallrecipeS().subscribe(suc=>{this.arr=suc;},err=>{alert("errrrrror");console.log(err);});
    this.u=sessionStorage.getItem('showUser');
this.ser.getallcategory().subscribe(suc=>this.categoryArr=suc);
  }
  search()
  {
    this.ezerarr=[];
    this.ser.getallrecipeS().subscribe(suc=>{this.arr=suc;
      this.arr.forEach(element => {
        if((this.category==""||element.recipeCategory.name==this.category)&&
        (this.name==""||element.recipeName.indexOf(this.name)>-1)&&
        (this.time==0||element.time<=this.time.toString()))
        this.ezerarr.push(element);
      });
      this.arr=this.ezerarr;
      if(this.arr.length<=0)
      alert("לא נמצאו תוצאות");
    },
      err=>{alert("errrrrror");console.log(err);});
  }
  clean()
  {
    this.ser.getallrecipeS().subscribe(suc=>{this.arr=suc;},err=>{alert("errrrrror");console.log(err);});
    this.name="";
    this.time=0;
    this.category="";
  }
}
