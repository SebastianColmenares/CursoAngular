import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Menu],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  constructor() { console.log('Hola Mundo'); }
}
