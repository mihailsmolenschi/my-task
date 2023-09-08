import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, CardModule],
})
export class SubscribeModule {}
