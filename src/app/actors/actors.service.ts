import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateForData } from '../utilities/utils';
import { actorCreationDTO, actorDTO } from './actors.model';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private _http: HttpClient) {}

  private apiURL = environment.apiURL + '/persons';

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this._http.get<actorDTO[]>(this.apiURL, {
      observe: 'response',
      params,
    });
  }

  getById(id: number): Observable<actorDTO> {
    return this._http.get<actorDTO>(`${this.apiURL}/${id}`);
  }

  create(actor: actorCreationDTO) {
    const formData = this.buildFormData(actor);
    console.log(formData);
    return this._http.post(this.apiURL, formData);
  }

  edit(id: number, actor: actorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this._http.put(`${this.apiURL}/${id}`, formData);
  }

  delete(id: number) {
    return this._http.delete(`${this.apiURL}/${id}`);
  }

  private buildFormData(actor: actorCreationDTO): FormData {
    const formData = new FormData();
    formData.append('name', actor.name);

    if (actor.dateOfBirth) {
      formData.append('dateOfBirth', formatDateForData(actor.dateOfBirth));
    }

    if (actor.picture) {
      formData.append('picture', actor.picture);
    }

    return formData;
  }
}
