import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent implements OnInit {

  // public counter:number = 10;
  counter = 10; // Ya typeScript entiende que por el valor de la inicialización l avariable counter es de tipo número.

  handleAdd() {
    this.counter ++; // Aquí se está mutando a la propiedad counter de esta clase.
  }

  constructor() { }

  ngOnInit(): void {
  }

}
