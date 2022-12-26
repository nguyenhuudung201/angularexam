import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { SilebarComponent } from './silebar/silebar.component';
import { InfoComponent } from './info/info.component';
// const appRoutes: Routes=[
//   {path:'', component: SilebarComponent},
//
// ]
@NgModule({
  declarations: [
    AppComponent,
    SilebarComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
