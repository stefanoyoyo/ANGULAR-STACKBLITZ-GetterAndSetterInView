import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  private numero = new numero();
  numero.setNum(3);
  
  
  }
  
  export class numero {
    private numero: number;
    constructor() {}
    set numero(num) {
      this.numero = num;
    }
    
    get numero() {
      return this.numero;
    }
    
    setNum(num: number) {
      this.numero = num;
    }
    
    getNum() {
      return this.numero;
    }
  }
  

