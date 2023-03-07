import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WheatherPageRoutingModule } from './wheather-routing.module';

import { WheatherPage } from './wheather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WheatherPageRoutingModule
  ],
  declarations: [WheatherPage]
})
export class WheatherPageModule {}
