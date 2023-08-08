import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.scss']
})
export class YComponent {

  @Output() textSaved = new EventEmitter<string>();
  inputText!: string;

  saveText(): void {
    this.textSaved.emit(this.inputText);
  }
}
