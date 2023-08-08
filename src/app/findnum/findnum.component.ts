import { Component } from '@angular/core';

@Component({
  selector: 'app-findnum',
  templateUrl: './findnum.component.html',
  styleUrls: ['./findnum.component.scss']
})
export class FindnumComponent {
  
  inputIndex: number=0;
  result: any=0; 
  series: number[] = [2, 3, 10, 15, 26, 35, 50, 63];


  findMissingNumber() {
    if (this.inputIndex >= 0 && this.inputIndex < this.series.length - 1) {
      this.result = this.series[this.inputIndex];
    } else {
      this.result = null;
    }
  }
}
