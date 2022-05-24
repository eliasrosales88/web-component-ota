import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { DataAdapterService } from './data-adapter.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private http: HttpClient,
    private dataAdapterService: DataAdapterService
  ) {}

  getData(): Observable<[]> {
    return this.http
      .get(
        'https://data.otainsight.com/public-data/frontend-hiring/guest-country-sample.json'
      )
      .pipe(
        switchMap((data: any) => {
          return of(
            data.guest_country
              .sort(
                (a: any, b: any) =>
                  b.value.nr_of_rooms - a.value.nr_of_rooms ||
                  b.value.nr_of_rooms -
                    b.reference_value.nr_of_rooms -
                    (a.value.nr_of_rooms - a.reference_value.nr_of_rooms)
              )
              .map((d: any) => {
                return this.dataAdapterService.adapt(d);
              })
          );
        })
      );
  }
}
