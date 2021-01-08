import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public counter:number = 10;
  counter = 10; // Ya typeScript entiende que por el valor de la inicialización l avariable counter es de tipo número.

  handleAdd() {
    this.counter ++; // Aquí se está mutando a la propiedad counter de esta clase.
  }
}
