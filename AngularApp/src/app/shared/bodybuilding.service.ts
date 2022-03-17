import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Body } from './bodybuilding.model';
@Injectable({
  providedIn: 'root'
})
export class BodybuildingService {
  selectedBody:  Body ;
  bodys:  Body[];
  readonly baseURL = 'http://localhost:3000/bodybuilding ';

  constructor(private http: HttpClient) { }

  postBody(img:  Body ) {
    return this.http.post(this.baseURL, img);
  }

  getBodyList() {
    return this.http.get(this.baseURL);
  }

  putBody(img: Body) {
    return this.http.put(this.baseURL + `/${img._id}`, img);
  }

  deleteBody(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

