import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RootRoutes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShareComponent } from './share/share.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RootRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
