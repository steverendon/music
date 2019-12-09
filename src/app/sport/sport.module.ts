import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportPageRoutingModule } from './sport-routing.module';

import { SportPage } from './sport.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [SportPage]
})
export class SportPageModule {}
