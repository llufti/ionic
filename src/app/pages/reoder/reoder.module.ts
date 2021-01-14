import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReoderPageRoutingModule } from './reoder-routing.module';

import { ReoderPage } from './reoder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReoderPageRoutingModule
  ],
  declarations: [ReoderPage]
})
export class ReoderPageModule {}
