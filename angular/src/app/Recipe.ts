import { category } from './Category';
import { Data } from '@angular/router';
import { user } from './User';

export class recipe{
    constructor(public recipeName?:string,public recipeCategory?:category,public time?:string,public level?:string,
        public dateInsert?:Data,public listIngrediens?:string[],public make?:string[],
        public picture?:string,public status?:boolean, public user?:user){}
}