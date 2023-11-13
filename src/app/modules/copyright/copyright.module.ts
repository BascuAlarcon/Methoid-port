import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopyrightRoutingModule } from './copyright-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CopyrightComponent } from './copyright.component';


@NgModule({
  declarations: [
    CopyrightComponent
  ],
  imports: [
    CommonModule,
    CopyrightRoutingModule,
    SharedModule
  ]
})
export class CopyrightModule { }
