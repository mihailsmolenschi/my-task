import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './subscribe/page/page.component';
import { AsyncPageComponent } from './async/async-page/async-page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
  {
    path: 'async',
    component: AsyncPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
