import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPageComponent } from './async-page.component';

describe('AsyncPageComponent', () => {
  let component: AsyncPageComponent;
  let fixture: ComponentFixture<AsyncPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncPageComponent]
    });
    fixture = TestBed.createComponent(AsyncPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
