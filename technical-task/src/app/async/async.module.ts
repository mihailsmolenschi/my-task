import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPageComponent } from './async-page/async-page.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [AsyncPageComponent],
  imports: [CommonModule, CardModule],
})
export class AsyncModule {}
