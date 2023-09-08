import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Thing } from 'src/app/interfaces/Thing';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() things: Thing[][] = [];
}
