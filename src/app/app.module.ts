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


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NgCardsComponent,
    NgDropdownComponent,
    DropdownComponent,
    NgButtonsComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
