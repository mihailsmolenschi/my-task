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
      map((array) => {
        const areaWithThings: AreaWithThings[] = [];

        const [things, areas] = array;

        const joinedThingsArr = [];
        for (let a of things) {
          if (a.joinedWith !== null) continue;

          const accumulatorArr = [];
          accumulatorArr.push(a);

          for (let b of things) {
            if (a.id === b.joinedWith) accumulatorArr.push(b);
          }

          joinedThingsArr.push(accumulatorArr);
        }

        for (let area of areas) {
          const newThingsArr = [];

          for (let array of joinedThingsArr) {
            if (area.areaId === array[0].areaId) newThingsArr.push(array);
          }
          areaWithThings.push({ ...area, things: newThingsArr });
        }

        return areaWithThings;
      })
    );
  }
}
