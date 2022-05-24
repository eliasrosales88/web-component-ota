interface Rooms {
  nr_of_rooms: number;
  revenue: number;
}

export class AppModel {
  countryName!: string;
  display_code!: string;
  id!: string;
  reference_value!: Rooms;
  value!: Rooms;
  rooms_diff!: number;
  constructor(data: AppModel) {
    Object.assign(this, data);
  }
}
