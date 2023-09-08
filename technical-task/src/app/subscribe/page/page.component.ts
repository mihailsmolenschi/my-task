import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ExampleService } from 'src/app/example.service';

import { AreaWithThings } from 'src/app/interfaces/AreaWithThings';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  areaWithThings: AreaWithThings[] = [];

  constructor(private exampleService: ExampleService) {}
  ngOnInit(): void {
    this.exampleService.getAreasWithThings().subscribe((data) => {
      this.areaWithThings = data;
      console.log(this.areaWithThings);
    });
  }
}
