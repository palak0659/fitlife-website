import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Supplement } from './supplement.model';
@Injectable({
  providedIn: 'root'
})
export class SupplementService {

  selectedSupplement: Supplement;
  supplements: Supplement[];
  readonly baseURL = 'http://localhost:3000/supplement';

  constructor(private http: HttpClient) { }

  postSupplement(img: Supplement) {
    return this.http.post(this.baseURL, img);
  }

  getSupplementList() {
    return this.http.get(this.baseURL);
  }

  putSupplement(img: Supplement) {
    return this.http.put(this.baseURL + `/${img._id}`, img);
  }

  deleteSupplement(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
