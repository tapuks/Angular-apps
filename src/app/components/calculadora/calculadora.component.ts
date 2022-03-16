import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

    variableConcat:any;
    @Input('sms') mensaje: string;

    @Output() alertaPulsada: EventEmitter<string>




  constructor() {
    this.mensaje='Mensaje de alerta por defecto'
    this.variableConcat=""
    this.alertaPulsada= new EventEmitter()
  }

  ngOnInit(): void {
  }

  onClick($event:any) {
    console.log($event.target.value);
    console.log(typeof $event.target.value);
    this.variableConcat=this.variableConcat + ($event.target.value)
  }

  onSuma() {
    this.variableConcat = eval(this.variableConcat)
  }

  onClick2() {
    this.alertaPulsada.emit('mensaje emitido')
  }

}
function input() {
  throw new Error('Function not implemented.');
}

