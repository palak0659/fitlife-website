import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Yoga } from './yoga.model';
@Injectable({
  providedIn: 'root'
})
export class YogaService {

  selectedYoga: Yoga;
  yogas: Yoga[];
  readonly baseURL = 'http://localhost:3000/yoga';

  constructor(private http: HttpClient) { }

  postYoga(img: Yoga) {
    return this.http.post(this.baseURL, img);
  }

  getYogaList() {
    return this.http.get(this.baseURL);
  }

  putYoga(img: Yoga) {
    return this.http.put(this.baseURL + `/${img._id}`, img);
  }

  deleteYoga(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

