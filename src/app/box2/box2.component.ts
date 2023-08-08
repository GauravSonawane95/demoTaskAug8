import { Component } from '@angular/core';
import { BoxserviceService } from '../boxservice.service';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.scss']
})
export class Box2Component {
  constructor(public sharedService: BoxserviceService) {}

  updateSharedText(text: any) {
    
    this.sharedService.textbox(text);
  }
}