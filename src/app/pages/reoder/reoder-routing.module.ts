import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReoderPage } from './reoder.page';

const routes: Routes = [
  {
    path: '',
    component: ReoderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReoderPageRoutingModule {}
