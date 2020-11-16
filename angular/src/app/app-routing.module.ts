import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllrecipesComponent } from './all-recipes/allrecipes.component';
import { RecipeDetailesComponent } from './recipe-detailes/recipe-detailes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { LogoutComponent } from './logout/logout.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'all-recipes',component:AllrecipesComponent},
  {path:'add',component:AddRecipeComponent},
  {path:'logout',component:LogoutComponent},
  {path:'',component:LoginComponent},
  {path:"edit/:recipeName",component:EditRecipeComponent},
  {path:"recipe-detailes/:recipeName",component:RecipeDetailesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
