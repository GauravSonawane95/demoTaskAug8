import { Component } from '@angular/core';
import { BoxserviceService } from '../boxservice.service';

@Component({
  selector: 'app-box5',
  templateUrl: './box5.component.html',
  styleUrls: ['./box5.component.scss']
})
export class Box5Component {
  constructor(public sharedService: BoxserviceService) {}

  updateSharedText(text: any) {
    
    this.sharedService.textbox(text);
  }
}