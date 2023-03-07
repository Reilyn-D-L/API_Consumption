import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WheatherPage } from './wheather.page';

const routes: Routes = [
  {
    path: '',
    component: WheatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WheatherPageRoutingModule {}
