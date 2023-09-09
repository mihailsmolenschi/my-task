import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Thing } from './interfaces/Thing';
import { Area } from './interfaces/Area';
import { AreaWithThings } from './interfaces/AreaWithThings';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private http: HttpClient) {}

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>(`http://localhost:5500/things`);
  }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`http://localhost:5500/areas`);
  }

  getAreasWithThings() {
    return forkJoin([this.getThings(), this.getAreas()]).pipe(
      map((thingsAndAreas) => {
        const areaWithThings: AreaWithThings[] = [];

        const [things, areas] = thingsAndAreas;

        const joinedThings: Thing[][] = [];
        for (const thing of things) {
          if (thing.joinedWith !== null) continue;

          const accumulator: Thing[] = [];
          accumulator.push(thing);

          for (const item of things) {
            if (thing.id === item.joinedWith) accumulator.push(item);
          }

          joinedThings.push(accumulator);
        }

        for (const area of areas) {
          const newThings: Thing[][] = [];

          for (const things of joinedThings) {
            const firstThing: Thing = things[0];
            if (area.areaId === firstThing.areaId) newThings.push(things);
          }
          areaWithThings.push({ ...area, things: newThings });
        }

        return areaWithThings;
      }),
    );
  }
}
