import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserSettings } from '../interfaces/UserSettings.model';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private apiURL = environment.apiURL + '/userSettings';

  constructor(private _http: HttpClient) {}

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this._http.post(this.apiURL, userSettings);

    //return of(userSettings);
  }
}
