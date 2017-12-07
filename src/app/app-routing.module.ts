import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { MultipleCardComponent } from './multiple-card/multiple-card.component';

const routes: Routes = [
  { path: '', component: CardsComponent },    
  { path: 'cards',  component: CardsComponent },
  { path: 'dropdowns',  component: DropdownComponent },
  { path: 'buttons',  component: ButtonsComponent },
  { path: 'alerts',  component: AlertsComponent },
  { path: 'muCard',  component: MultipleCardComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]

})

export class AppRoutingModule { }
