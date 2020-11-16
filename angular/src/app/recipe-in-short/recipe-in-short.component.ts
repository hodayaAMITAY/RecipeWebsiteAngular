import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-in-short',
  templateUrl: './recipe-in-short.component.html',
  styleUrls: ['./recipe-in-short.component.css']
})
export class RecipeInShortComponent implements OnInit {
@Input()
myrecipenow:recipe; 
  constructor() { }
link:string;
  ngOnInit() {
    this.link="/all-recipe";

  }
  check()
  {
    if(sessionStorage.getItem('the User'))
    this.link="/recipe-detailes/"+this.myrecipenow.recipeName;
    else{
     this.link="/all-recipe";
     alert("אינך רשום");
    }
  }

}
