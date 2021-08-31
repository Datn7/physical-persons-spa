import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/customer.model';
import { emailMatcher } from '../validators/emailMatcher.validator';
import { ratingRange } from '../validators/rating.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  customer = new Customer();
  customerForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this._fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', [Validators.required]],
        },
        { validator: emailMatcher }
      ),
      phone: [''],
      notification: ['email'],
      rating: [null, ratingRange(1, 5)],
      sendCatalog: true,
    });

    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(),
    // });
  }

  save() {
    console.log(this.customerForm);
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');

    if (notifyVia === 'text') {
      phoneControl?.setValidators(Validators.required);
    } else {
      phoneControl?.clearValidators();
    }

    phoneControl?.updateValueAndValidity();
  }
}
