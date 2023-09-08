import { Component } from '@angular/core';
import { ExampleService } from 'src/app/example.service';

import { AreaWithThings } from 'src/app/interfaces/AreaWithThings';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  AreaWithThings: AreaWithThings[] = [];

  constructor(private exampleService: ExampleService) {}
  ngOnInit(): void {
    this.exampleService.getAreasWithThings().subscribe((data) => {
      this.AreaWithThings = data;
      console.log(this.AreaWithThings);
    });
  }
}
