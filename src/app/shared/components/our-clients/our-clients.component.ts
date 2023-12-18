import { Component  } from '@angular/core';
import { ClientesCard } from '../../../data/ClientesCard';
import cardarchivoJson from '../../../../assets/archivoJson.json';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css'],
})

export class OurClientsComponent {
  cards: ClientesCard[] = cardarchivoJson;
  totalCards = this.cards.length;
  currentIndex = 250;
  cardWidth = 100; // Ancho de la tarjeta
  infiniteCards: ClientesCard[] = [];

  constructor() {
    this.infiniteCards = this.createInfiniteCards();
  }

  private createInfiniteCards(): ClientesCard[] {
    const result: ClientesCard[] = [];
    for (let i = 0; i < 100; i++) { // Ajusta según sea necesario
      result.push(...this.cards);
    }
    return result;
  }

  moveToNext() {
    this.currentIndex = (this.currentIndex + 1) % this.infiniteCards.length;
  }

  moveToPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.infiniteCards.length) % this.infiniteCards.length;
  }
}
