import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {
  phoneNumberForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.phoneNumberForm = this.fb.group({
      phoneNumbers: this.fb.array([this.fb.control('', Validators.required)])
    });
  }

  addPhoneNumber(): void {
    this.phoneNumbers.push(this.fb.control(''));
  }

  removePhoneNumber(index: number): void {
    this.phoneNumbers.removeAt(index);
  }

  submitForm(): void {
    // Handle form submission here
    const phoneNumbers = this.phoneNumberForm.value.phoneNumbers;
    console.log('Phone Numbers:', phoneNumbers);
  }

  get phoneNumbers() {
    return this.phoneNumberForm.get('phoneNumbers') as FormArray;
  }
}