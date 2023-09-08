import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleService } from 'src/app/example.service';
import { AreaWithThings } from 'src/app/interfaces/AreaWithThings';

@Component({
  selector: 'app-async-page',
  templateUrl: './async-page.component.html',
  styleUrls: ['./async-page.component.css'],
})
export class AsyncPageComponent implements OnInit {
  temp$!: Observable<AreaWithThings[]>;

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.temp$ = this.exampleService.getAreasWithThings();
  }
}
