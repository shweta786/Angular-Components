import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  { path: '', component: CardsComponent },    
  { path: 'cards',  component: CardsComponent },
  { path: 'dropdowns',  component: DropdownComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]

})

export class AppRoutingModule { }
