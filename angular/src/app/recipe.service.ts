import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recipe } from './Recipe';
import { Observable } from 'rxjs';
import { category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public httpItem:HttpClient) { }
  getallrecipeS()
  {
    return this.httpItem.get<any>("http://localhost:50843/api/recipe/getallrecipe");
  }
  getallcategory()
    {
      return this.httpItem.get<category>("http://localhost:50843/api/categorey/getallcategory");
    }
  getrecipedetails(name){
    return this.httpItem.get<recipe>("http://localhost:50843/api/recipe/getDetails?name="+name);
  }
  addrecipe222(name){
    return this.httpItem.post<any>("http://localhost:50843/api/recipe/addrecipe111",name);
  }
  eddit444(name){
    return this.httpItem.post<any>("http://localhost:50843/api/recipe/eddit333",name);
  }
  findcategory(name:category)
  {
    return this.httpItem.post<category>("http://localhost:50843/api/categorey/FindCategory",name);
  }
 
  
}
