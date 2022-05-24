import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs';
import { componentName } from './app.module';
import { DataService } from './data.service';
import { COUNTRY_CODE_MAPPING } from '../assets/country-mapping';

@Component({
  selector: componentName,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
  host: {},
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent implements OnInit {
  title = 'ota1';
  data$ = this.dataService.getData();
  max$ = this.data$.pipe(
    map((x: any) => {
      return x[0];
    })
  );
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    const font = document.createElement('link');
    font.href = 'https://fonts.googleapis.com/css2?family=Inter';
    font.rel = 'stylesheet';
    document.head.appendChild(font);
  }
}
