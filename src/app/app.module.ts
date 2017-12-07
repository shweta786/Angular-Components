import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { NgCardsComponent } from './ng-cards/ng-cards.component';
import { NgDropdownComponent } from './ng-dropdown/ng-dropdown.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgButtonsComponent } from './ng-buttons/ng-buttons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NgAlertsComponent } from './ng-alerts/ng-alerts.component';
import { MultipleCardComponent } from './multiple-card/multiple-card.component';
import { NgMultipleCardComponent } from './ng-multiple-card/ng-multiple-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NgCardsComponent,
    NgDropdownComponent,
    DropdownComponent,
    NgButtonsComponent,
    ButtonsComponent,
    AlertsComponent,
    NgAlertsComponent,
    MultipleCardComponent,
    NgMultipleCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
