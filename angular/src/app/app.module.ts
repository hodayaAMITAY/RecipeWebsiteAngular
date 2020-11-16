import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipeDetailesComponent } from './recipe-detailes/recipe-detailes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { AllrecipesComponent } from './all-recipes/allrecipes.component';
import { mypipe } from 'src/mypipe';
import { DifficultyPipe } from 'src/DifficultyPipe';
import { LogoutComponent } from './logout/logout.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeInShortComponent } from './recipe-in-short/recipe-in-short.component';
import {FormsModule}from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecipeDetailesComponent,
    EditRecipeComponent,
    AllrecipesComponent,
    mypipe,
    DifficultyPipe,
    LogoutComponent,
    AddRecipeComponent,
    RecipeInShortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
