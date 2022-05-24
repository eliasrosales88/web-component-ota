import { Injectable } from '@angular/core';
import { COUNTRY_CODE_MAPPING } from 'src/assets/country-mapping';
import { Adapter } from './adapter.interface';
import { AppModel } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class DataAdapterService implements Adapter<AppModel> {
  constructor() {}
  adapt(item: any): AppModel {
    let data: AppModel = {
      countryName: COUNTRY_CODE_MAPPING[item.display_code],
      display_code: item.display_code,
      id: item.id,
      reference_value: {
        nr_of_rooms: item.reference_value.nr_of_rooms,
        revenue: item.reference_value.revenue,
      },
      value: {
        nr_of_rooms: item.value.nr_of_rooms,
        revenue: item.value.revenue,
      },
      rooms_diff: item.value.nr_of_rooms - item.reference_value.nr_of_rooms,
    };
    return new AppModel(data);
  }
}
