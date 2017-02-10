import { Component } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
@Component({
  selector: 'app-root',
  templateUrl: './receipe-book.component.html',
  providers: [RecipeService, ShoppingListService]
})

export class RecipeBookAppComponent {

}
