import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit {

  public users = [
    {name: 'David'}, {name: 'Jazmin'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  pulsa(){
    alert('holaaa')
  }

}
