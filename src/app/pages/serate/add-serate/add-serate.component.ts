import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-serate',
  templateUrl: './add-serate.component.html',
  styleUrls: ['./add-serate.component.scss']
})
export class AddSerateComponent {
  

  constructor(
    private router: Router,
    private location : Location
 
    ) {}

    goToBack() {
      this.location.back();
    }
}
