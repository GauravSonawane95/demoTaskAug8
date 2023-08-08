import { Component } from '@angular/core';
import { BoxserviceService } from '../boxservice.service';
@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.scss']
})
export class Box1Component {
  constructor(public sharedService: BoxserviceService) {}

  updateSharedText(text: any) {
    
    this.sharedService.textbox(text);
  }
}
