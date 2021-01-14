import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToglePage } from './togle.page';

const routes: Routes = [
  {
    path: '',
    component: ToglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToglePageRoutingModule {}
