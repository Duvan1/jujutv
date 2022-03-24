import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends BaseService {
  get(page?: number): Observable<any[]> {
    let index = page ? page : 1;

    const params = new HttpParams().append('page', index);
    return this.http.get<any[]>(
      this.settings.get.rickAndMortyAPI + '/character',
      {
        params: { page: index },
      }
    );
  }

  getById(character: string): Observable<any> {
    return this.http.get<any>(
      `${this.settings.get.rickAndMortyAPI}/character/${character}`
    );
  }
}
