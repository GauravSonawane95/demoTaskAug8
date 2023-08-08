import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.scss']
})
export class XComponent {
  @Output() xDataSaved = new EventEmitter<any>();
  tabName!: string;
  yComponentsData: string[] = [];

  addYComponent(): void {
    this.yComponentsData.push('');
  }

  onTextSaved(text: string): void {
    this.yComponentsData[this.yComponentsData.length - 1] = text;
  }
}