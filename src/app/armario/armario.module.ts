import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmarioListComponent } from './armario-list/armario-list.component';



@NgModule({
  declarations: [
    ArmarioListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArmarioListComponent
  ]
})
export class ArmarioModule { }
