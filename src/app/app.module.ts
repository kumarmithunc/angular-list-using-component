import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout.component';

import {
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
} from '@angular/material';



@NgModule({
  imports:[ BrowserModule, FormsModule , MatDividerModule,
  MatListModule,
  MatIconModule,
  MatCardModule,FlexLayoutModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, LayoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
