import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { Tarjeta } from '../tarjeta/tarjeta';
import { Card } from '../interface/card';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, Tarjeta],  
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu {
  cards: Card[] = [
    { imagen: 'img/Pastelchocolate.png',
      titulo: 'Pastel de Chocolate', 
      descripcion: 'Delicioso pastel de chocolate con cobertura', 
      ingredientes: ['Harina', 'Azúcar', 'Cacao', 'Huevos', 'Mantequilla']},

    { imagen: 'img/StrawberryCake.jpg',
      titulo: 'Tarta de Frutas',     
      descripcion: 'Fresca tarta de frutas de temporada',
      ingredientes: ['Harina', 'Azúcar', 'Frutas', 'Crema']},
  ];

  formularioVisible = false;

  newCard: Card = {
    imagen: 'img/Pastelchocolate.png',
    titulo: '',
    descripcion: ''
    , ingredientes: []
  };
  
  indiceSeleccionado: number=0;

  flipformulario() {
    this.formularioVisible = !this.formularioVisible;
  }

  onCardSelected(valor: number) {
  console.log("Evento recibido:", valor);
  alert("Seleccionaste una tarjeta -> " + valor);
  }
  
  agregarPastel(form: any) {
    if (form.invalid) return;

    this.cards.push({ ...this.newCard });

    this.newCard = {
      imagen: 'img/Pastelchocolate.png',
      titulo: '',
      descripcion: '',
      ingredientes: []
    };

    form.resetForm({ imagen: 'img/Pastelchocolate.png' });
    this.formularioVisible = false;
  }

  recibirValor(valorRecibido: number) {
    this.indiceSeleccionado = valorRecibido;
    console.log("Valor recibido:" + valorRecibido);
    alert("Seleccionaste una tarjeta -> " + valorRecibido);
  }
}