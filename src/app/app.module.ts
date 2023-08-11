import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
import { DataSharingOneComponentToAnotherComponentComponent } from './data-sharing-one-component-to-another-component/data-sharing-one-component-to-another-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DataSharingOneComponentToAnotherComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
