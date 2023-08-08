import { Component } from '@angular/core';
import { BoxserviceService } from '../boxservice.service';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.scss']
})
export class Box3Component {
  constructor(public sharedService: BoxserviceService) {}

  updateSharedText(text: any) {
    
    this.sharedService.textbox(text);
  }
}