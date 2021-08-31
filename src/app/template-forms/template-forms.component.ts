import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../interfaces/UserSettings.model';
import { TemplateService } from './template.service';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss'],
})
export class TemplateFormsComponent implements OnInit {
  userSettings: UserSettings = {
    name: 'Giorgi',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'წლიური',
    notes: 'here are some',
  };

  constructor(private _templateService: TemplateService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    this._templateService.postUserSettingsForm(this.userSettings).subscribe(
      (result) => {
        console.log('success:', result);
      },
      (error) => console.log('error:', error)
    );
  }
}
