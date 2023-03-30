import { Component, OnInit } from '@angular/core';
import { Cliente } from "./cliente";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] =[
    { id: 1, nombre: 'Andres', apellido:'Luz', email:'andresluz@gmail.com', createAt:'01/01/2001' },
    { id: 2, nombre: 'Marilys', apellido:'Narvaez', email:'marilys@gmail.com', createAt:'28/01/1999' },
    { id: 3, nombre: 'Luis', apellido:'Quintero', email:'luis@gmail.com', createAt:'25/04/2005' },
    { id: 4, nombre: 'Yaris', apellido:'Gomez', email:'yaris@gmail.com', createAt:'24/07/2005' },
    { id: 5, nombre: 'Nelson', apellido:'Gomez', email:'nelson@gmail.com', createAt:'21/09/1899' },
    { id: 6, nombre: 'Nelson', apellido:'Gomez', email:'nelson@gmail.com', createAt:'29/03/2000' },
    { id: 7, nombre: 'Edgardo', apellido:'Gomez', email:'edgardo@gmail.com', createAt:'25/03/2000' },
    { id: 8, nombre: 'Kiara', apellido:'Milena', email:'kiara@gmail.com', createAt:'04/02/2020' },
    { id: 9, nombre: 'Luz', apellido:'Villa', email:'luzvilla@gmail.com', createAt:'07/08/1997' }
  ];

  constructor() { }
  ngOnInit(){

  }
}
