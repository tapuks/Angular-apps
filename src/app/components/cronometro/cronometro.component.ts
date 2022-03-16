import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  @Input() inicio:any;
  num: number;
  @Output() mensaje:EventEmitter<string>
  constructor() {
    this.num=10
    this.mensaje=new EventEmitter()
   }



  ngOnInit(): void {
    this.num= this.inicio ? this.inicio :10;

  }

  onClick() {
    if (this.num ==0 ) this.num= this.inicio
    let interval= setInterval(()=> {
      this.num= this.num-1
      if (this.num ==0){
        clearInterval(interval)
        this.mensaje.emit('Cronometro finalizado')
      }
    },1000)
  }

  onChange($event: any) {
    console.log($event.target.value);
  }

  onInput($event:any) {
    console.log($event.target.value);
  }

}
