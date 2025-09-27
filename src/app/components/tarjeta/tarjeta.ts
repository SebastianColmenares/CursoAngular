import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../interface/card';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.html',
  styleUrls: ['./tarjeta.scss']
})
export class Tarjeta {
  @Input() card!: Card;

  @Output() selectedCard = new EventEmitter<number>();

  @Input() indice:number = 0;

  seleccionarCard() {
    console.log("Tarjeta seleccionada:", this.card.titulo);
    this.selectedCard.emit(this.indice);
  }
}
