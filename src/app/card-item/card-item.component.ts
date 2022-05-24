import { Component, Input, OnInit } from '@angular/core';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() data!: AppModel;
  @Input() max!: AppModel;
  constructor() {}

  ngOnInit(): void {}
}
