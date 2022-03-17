import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DietService } from '../shared/diet.service';
import {Diet } from '../shared/diet.model';
declare var M: any;
@Component({
  selector: 'app-diet5',
  templateUrl: './diet5.component.html',
  styleUrls: ['./diet5.component.css'],
  providers: [DietService]
})
export class Diet5Component implements OnInit {
  constructor(public dietService: DietService) { }

  ngOnInit() {
     this.resetForm();
    this. refreshDietList() ;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.dietService.selectedDiet = {
      _id: "",
     
      description: "",
      loss:"",
  
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.dietService.postDiet(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDietList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
        else {
          this.dietService.putDiet(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshDietList();
            M.toast({ html: 'Updated successfully', classes: 'rounded' });
          });
        }
      }

  refreshDietList() {
    this.dietService.getDietList().subscribe((res) => {
      this.dietService.diets = res as Diet[];
    });
  }

  onEdit(fli:Diet) {
    this.dietService.selectedDiet = fli;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.dietService.deleteDiet(_id).subscribe((res) => {
        this. refreshDietList() ;
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}


 
