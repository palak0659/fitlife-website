import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SupplementService } from '../shared/supplement.service';
import {Supplement } from '../shared/supplement.model';

declare var M: any;
@Component({
  selector: 'app-supplementform',
  templateUrl: './supplementform.component.html',
  styleUrls: ['./supplementform.component.css'],
  providers: [SupplementService]
})
export class SupplementformComponent implements OnInit {

  constructor(public supplementService: SupplementService) { }

  ngOnInit() {
     this.resetForm();
    this. refreshSupplementList() ;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.supplementService.selectedSupplement = {
      _id: "",
     supplementname: "",
      description: "",
      purpose: "",
    
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.supplementService.postSupplement(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSupplementList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
        else {
          this.supplementService.putSupplement(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshSupplementList();
            M.toast({ html: 'Updated successfully', classes: 'rounded' });
          });
        }
      }

  refreshSupplementList() {
    this.supplementService.getSupplementList().subscribe((res) => {
      this.supplementService.supplements = res as Supplement[];
    });
  }

  onEdit(fli: Supplement) {
    this.supplementService.selectedSupplement = fli;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.supplementService.deleteSupplement(_id).subscribe((res) => {
        this. refreshSupplementList() ;
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
