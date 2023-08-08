import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxserviceService {
boxText:any
textbox(t:any){
  this.boxText=t;
}

}
