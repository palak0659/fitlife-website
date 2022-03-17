import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {  BodybuildingService } from '../shared/bodybuilding.service';
import { Body } from '../shared/bodybuilding.model';

declare var M: any;
@Component({
  selector: 'app-bodybuilding',
  templateUrl: './bodybuilding.component.html',
  styleUrls: ['./bodybuilding.component.css'],
  providers: [ BodybuildingService]
})
export class BodybuildingComponent implements OnInit {
  constructor(public  bodybuildingService:  BodybuildingService) { }

  ngOnInit() {
     this.resetForm();
    this. refreshBodybuildingList() ;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.bodybuildingService.selectedBody = {
      _id: "",
      name:"",
      description: "",
      link:"",
     purpose:"",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.bodybuildingService.postBody(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBodybuildingList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
        else {
          this.bodybuildingService.putBody(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshBodybuildingList();
            M.toast({ html: 'Updated successfully', classes: 'rounded' });
          });
        }
      }

      refreshBodybuildingList() {
    this.bodybuildingService.getBodyList().subscribe((res) => {
      this.bodybuildingService.bodys = res as Body[];
    });
  }

  onEdit(fli: Body) {
    this.bodybuildingService.selectedBody = fli;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bodybuildingService.deleteBody(_id).subscribe((res) => {
        this. refreshBodybuildingList() ;
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}

