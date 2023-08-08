import { Component } from '@angular/core';
import { BoxserviceService } from '../boxservice.service';

@Component({
  selector: 'app-box4',
  templateUrl: './box4.component.html',
  styleUrls: ['./box4.component.scss']
})
export class Box4Component {
  constructor(public sharedService: BoxserviceService) {}

  updateSharedText(text: any) {
    
    this.sharedService.textbox(text);
  }
}