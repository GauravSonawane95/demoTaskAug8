import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindnumComponent } from './findnum/findnum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneComponent } from './phone/phone.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { XyComponent } from './xy/xy.component';
import { BoxComponent } from './box/box.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { Box3Component } from './box3/box3.component';
import { Box4Component } from './box4/box4.component';
import { Box5Component } from './box5/box5.component';

@NgModule({
  declarations: [
    AppComponent,
    FindnumComponent,
    PhoneComponent,
    XComponent,
    YComponent,
    XyComponent,
    BoxComponent,
    Box1Component,
    Box2Component,
    Box3Component,
    Box4Component,
    Box5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
