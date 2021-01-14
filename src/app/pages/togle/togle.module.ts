import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToglePageRoutingModule } from './togle-routing.module';

import { ToglePage } from './togle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToglePageRoutingModule
  ],
  declarations: [ToglePage]
})
export class ToglePageModule {}
