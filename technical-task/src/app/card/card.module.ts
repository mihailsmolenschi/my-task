import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [CardListComponent, CardComponent],
  imports: [CommonModule],
  exports: [CardListComponent, CardComponent],
})
export class CardModule {}
