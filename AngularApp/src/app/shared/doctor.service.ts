import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Doctor } from './doctor.model';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  selectedDoctor: Doctor;
  doctors: Doctor[];
  readonly baseURL = 'http://localhost:3000/doctor';

  constructor(private http: HttpClient) { }

  postDoctor(img:Doctor) {
    return this.http.post(this.baseURL, img);
  }

  getDoctorList() {
    return this.http.get(this.baseURL);
  }

  putDoctor(img: Doctor) {
    return this.http.put(this.baseURL + `/${img._id}`, img);
  }

  deleteDoctor(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
