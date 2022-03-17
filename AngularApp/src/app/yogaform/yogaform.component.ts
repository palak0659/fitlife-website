import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { YogaService } from '../shared/yoga.service';
import { Yoga } from '../shared/yoga.model';

declare var M: any;
@Component({
  selector: 'app-yogaform',
  templateUrl: './yogaform.component.html',
  styleUrls: ['./yogaform.component.css'],
  providers: [YogaService]
})
export class YogaformComponent implements OnInit {

  constructor(public yogaService: YogaService) { }

  ngOnInit() {
     this.resetForm();
    this. refreshYogaList() ;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.yogaService.selectedYoga = {
      _id: "",
      name:"",
      description: "",
      link:"",
     purpose:"",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.yogaService.postYoga(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshYogaList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
        else {
          this.yogaService.putYoga(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshYogaList();
            M.toast({ html: 'Updated successfully', classes: 'rounded' });
          });
        }
      }

  refreshYogaList() {
    this.yogaService.getYogaList().subscribe((res) => {
      this.yogaService.yogas = res as Yoga[];
    });
  }

  onEdit(fli: Yoga) {
    this.yogaService.selectedYoga = fli;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.yogaService.deleteYoga(_id).subscribe((res) => {
        this. refreshYogaList() ;
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
