import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class LocationsService extends BaseService {
  get(page?: number): Observable<any[]> {
    let index = page ? page : 1;
    return this.http.get<any[]>(
      this.settings.get.rickAndMortyAPI + '/location',
      {
        params: { page: index },
      }
    );
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(
      `${this.settings.get.rickAndMortyAPI}/location/${id}`
    );
  }
}
