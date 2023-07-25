import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSerateComponent } from './add-serate/add-serate.component';
import { EditSerateComponent } from './edit-serate/edit-serate.component';
import { SerateRoutingModule } from './serate-routing.module';



@NgModule({
  declarations: [
    AddSerateComponent,
    EditSerateComponent
  ],
  imports: [
    CommonModule,
    SerateRoutingModule
  ]
})
export class SerateModule { }
