import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../tarjeta/tarjeta';
import { Card } from '../interface/card';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, Tarjeta],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu {
  cards: Card[] = [
    {
      imagen: 'img/Pastelchocolate.png',
      titulo: 'Pastel de Chocolate',
      descripcion: 'Delicioso pastel de chocolate con cobertura'
    },
    {
      imagen: 'img/StrawberryCake.jpg',
      titulo: 'Tarta de Frutas',
      descripcion: 'Fresca tarta de frutas de temporada'
    },
  ];

  agregarPastel() {
    this.cards.push({
      imagen: 'img/Pastelchocolate.png',
      titulo: 'Nuevo Pastel',
      descripcion: 'Agregado dinámicamente a la lista'
    });
  }
}

