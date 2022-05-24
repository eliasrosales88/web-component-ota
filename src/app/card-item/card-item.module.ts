import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [CardItemComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [CardItemComponent],
})
export class CardItemModule {}
