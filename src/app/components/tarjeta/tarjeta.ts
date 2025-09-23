import { Component, Input } from '@angular/core';
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
}
