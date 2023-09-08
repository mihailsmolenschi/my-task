import { Thing } from './Thing';

export interface AreaWithThings {
  areaId: number;
  name: string;
  things: Thing[][];
}
