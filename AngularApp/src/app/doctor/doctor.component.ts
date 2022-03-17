import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/doctor.service';
import {Doctor } from '../shared/doctor.model';
import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers: [DoctorService]
})
export class DoctorComponent implements OnInit {

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {
     this.resetForm();
    this. refreshDoctorList() ;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.doctorService.selectedDoctor = {
      _id: "",
     name: "",
     address: "",
      description: "",
      contact: "",
    
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.doctorService.postDoctor(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDoctorList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
        else {
          this.doctorService.putDoctor(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshDoctorList();
            M.toast({ html: 'Updated successfully', classes: 'rounded' });
          });
        }
      }

  refreshDoctorList() {
    this.doctorService.getDoctorList().subscribe((res) => {
      this.doctorService.doctors = res as Doctor[];
    });
  }

  onEdit(fli: Doctor) {
    this.doctorService.selectedDoctor = fli;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.doctorService.deleteDoctor(_id).subscribe((res) => {
        this. refreshDoctorList() ;
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


}





