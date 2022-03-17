import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Diet } from './diet.model';
@Injectable({
  providedIn: 'root'
})
export class DietService {


  selectedDiet: Diet;
  diets: Diet[];
  readonly baseURL = 'http://localhost:3000/diet';

  constructor(private http: HttpClient) { }

  postDiet(img: Diet) {
    return this.http.post(this.baseURL, img);
  }

  getDietList() {
    return this.http.get(this.baseURL);
  }

  putDiet(img: Diet) {
    return this.http.put(this.baseURL + `/${img._id}`, img);
  }

  deleteDiet(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

