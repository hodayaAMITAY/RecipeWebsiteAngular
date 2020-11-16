import { Component, OnInit } from '@angular/core';
import { recipe } from '../Recipe';
import { category } from '../Category';
import { RecipeService } from '../recipe.service';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { user } from '../user';
// import {ReactiveFormsModule} from '@angular/forms';
// import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(public ser:RecipeService,public router:Router,public myser:MyserviceService) { }
categoryArr:category;
r:recipe = new recipe();

  ngOnInit() {
    this.r.recipeCategory=new category(2,"back","2");
    this.ser.getallcategory().subscribe(suc=>this.categoryArr=suc);
    this.r.listIngrediens=[];
    this.r.listIngrediens.push("");
    this.r.make=[];
    this.r.make.push("");
   
  }
  addRowIngridience(i)
  {
    if(this.r.listIngrediens[i+1]==undefined)
    this.r.listIngrediens.push("");
    if(this.r.listIngrediens[i+1]!=undefined&&this.r.listIngrediens[i]=="")
    {
      for(var j =i; j<this.r.listIngrediens.length-1; j++)
        this.r.listIngrediens[j]=this.r.listIngrediens[j+1]
        this.r.listIngrediens.pop() 
      // if(this.r.listIngrediens[+1]==undefined)
      //   this.r.listIngrediens.pop();
    }
   
  }
  addsomthing(n)
  {
    if(this.r.make[n+1]==undefined)
    this.r.make.push("");
    if(this.r.make[n+1]!=undefined&&this.r.make[n]=="")
    {
      for(var j =n; j<this.r.make.length-1; j++)
        this.r.make[j]=this.r.make[j+1]
        this.r.make.pop()
    // if(this.r.make[+1]==undefined)
    // this.r.make.pop();
    }
  }
  trackByFn(index: any, item: any) 
  {
    return index;
  }
  addrecipe111()
  {
    console.log(this.r);
    if(this.r.picture)
    this.r.picture=this.r.picture.slice(12);
    this.r.status=true;
    this.r.user=new user();
    this.r.user.userName=sessionStorage.getItem('showUser');
    this.r.user.userPassword=sessionStorage.getItem('pass');
    this.myser.LookfforUser(this.r.user).subscribe(suc=>this.r.user=suc);
    this.ser.addrecipe222(this.r).subscribe(suc=>{alert(suc);this.router.navigate(["all-recipes"])})

 
  }   
  FindCategory()
  {
    this.ser.findcategory(this.r.recipeCategory).subscribe(suc=>this.r.recipeCategory=suc,err=>alert(err));
    console.log(this.r.recipeCategory)
  }
}
