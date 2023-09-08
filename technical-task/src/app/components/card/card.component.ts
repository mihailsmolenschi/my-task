import { Component, Input } from '@angular/core';
import { Thing } from 'src/app/interfaces/Thing';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() thing: Thing[] = [];
}
