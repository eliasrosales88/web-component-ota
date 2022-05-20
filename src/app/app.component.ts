import { Component } from '@angular/core';
import { componentName } from './app.module';

@Component({
  selector: componentName,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ota1';
}
