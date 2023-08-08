import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindnumComponent } from './findnum/findnum.component';
import { XyComponent } from './xy/xy.component';
import { PhoneComponent } from './phone/phone.component';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';

const routes: Routes = [
  {path:'q1',component:FindnumComponent},
  {path:'q2',component:XyComponent},
  {path:'q3',component:PhoneComponent},
  {path:'q4',component:BoxComponent},
  {path:'',component:AppComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
