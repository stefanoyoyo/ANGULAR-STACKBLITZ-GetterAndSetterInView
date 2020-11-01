import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  private numero = new Numero();
  costructor() {
    this.numero.setNum(3);
  }
  
  
  }
  
  export class Numero {
    private numero: number;
    constructor() {}
    set setnumero(num) {
      this.numero = num;
    }
    
    get getnumero() {
      return this.numero;
    }
    
    setNum(num: number) {
      this.numero = num;
    }
    
    getNum() {
      return this.numero;
    }
  }
  

