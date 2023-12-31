import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Thing } from 'src/app/interfaces/Thing';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() thing: Thing[] = [];
}
