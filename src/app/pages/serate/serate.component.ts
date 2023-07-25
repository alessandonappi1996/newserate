import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serate',
  templateUrl: './serate.component.html',
  styleUrls: ['./serate.component.scss']
})
export class SerateComponent {
  constructor(
    private router: Router,
    ) {}
goToAdd(){
  this.router.navigate(['serate/add-serate'])
}
}
