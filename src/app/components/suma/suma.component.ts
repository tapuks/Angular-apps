import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {
  @Input() num1: number;
  @Input() num2: number;
  resultado: number;


  constructor() {
    this.num1=10;
    this.num2=24;
    this.resultado=0;
   }

  ngOnInit(): void {
  }

  sumarNumeros(){
    this.resultado = this.num1 + this.num2;
  }

}
