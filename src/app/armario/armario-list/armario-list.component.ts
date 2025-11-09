import { Component, OnInit } from '@angular/core';
import { Armario } from '../armario';
import { dataArmarios } from '../dataArmarios';

@Component({
  selector: 'app-armario-list',
  templateUrl: './armario-list.component.html',
  styleUrls: ['./armario-list.component.css']
})
export class ArmarioListComponent implements OnInit {
  armarios: Array<Armario> = [];
  constructor() { }
  

  getArmariosList(): Array<Armario> {
    return dataArmarios;
  }

  getPrendasCount(armario: Armario): number {
    // Placeholder: return random number between 5-20 until backend is ready
    return Math.floor(Math.random() * 16) + 5;
  }

  getOutfitsCount(armario: Armario): number {
    // Placeholder: return random number between 2-10 until backend is ready
    return Math.floor(Math.random() * 9) + 2;
  }

  ngOnInit() {
    this.armarios = this.getArmariosList();
  }

}
