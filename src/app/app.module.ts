import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecipeBookAppComponent } from './recipe-book.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import {routing} from "./app.routing";
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start.component';


@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing // custom routing which is written.
  ],
  providers: [],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule { }
