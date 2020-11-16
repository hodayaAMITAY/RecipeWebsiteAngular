import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { RecipeService } from '../recipe.service';
import { category } from '../Category';
import { recipe } from '../Recipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
categoreyList:category[];
arive:boolean=false;


  constructor(public active:ActivatedRoute,public myservice:RecipeService,public router:Router) { }

  /*getallcategory()
  {
     return this.myservice.getallcategory().subscribe(suc=>{
       this.categoreyList=suc;
       this.arive=true;
      },err=>console.error());
  }*/
  name;
   static i;
  //r:recipe = new recipe();
  r:recipe;
  im:string;
  categoryArr:category
  ngOnInit()
  {
    this.active.params.subscribe(suc=>{
      this.name=suc["recipeName"];
     
      this.myservice.getrecipedetails(this.name).subscribe(suc=>{this.r=suc;this.im=this.r.picture
        this.r.listIngrediens.push("");
        this.r.make.push("");},err=>alert(err));
    })
    this.myservice.getallcategory().subscribe(suc=>this.categoryArr=suc);

    /*this.getallcategory();*/
  }

addRowIngridience(n)
{
if(this.r.listIngrediens[n+1]==undefined)
this.r.listIngrediens.push("");
if(this.r.listIngrediens[n+1]!=undefined&&this.r.listIngrediens[n]=="")
{for(var j =n; j<this.r.listIngrediens.length-1; j++)
    this.r.listIngrediens[j]=this.r.listIngrediens[j+1]
    this.r.listIngrediens.pop()
  }
}
addsomthing(i)
{
if(this.r.make[i+1]==undefined)
this.r.make.push("");
if(this.r.make[i+1]!=undefined&&this.r.make[i]=="")
{
  for(var j =i; j<this.r.make.length-1; j++)
    this.r.make[j]=this.r.make[j+1]
    this.r.make.pop()
  }   
}
trackByFn(index: any, item: any) {
  return index;
}
eddit333()
  {
    this.r.listIngrediens.pop();
    this.r.make.pop();
    if(this.im!=this.r.picture)
    {this.r.picture =this.r.picture.slice(12);}
    this.myservice.eddit444(this.r).subscribe(suc=>{alert(suc);this.router.navigate(["all-recipes"])})
    if(this.r.make[+1]==undefined)
    this.r.make.pop()
    if(this.r.listIngrediens[+1]==undefined)
    this.r.listIngrediens.pop()

  }
}



