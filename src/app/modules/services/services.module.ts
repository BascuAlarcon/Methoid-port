import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module'; 
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './page/services.component';
import { PlataformComponent } from './components/plataform/plataform.component';
import { CycleComponent } from './components/cycle/cycle.component';
import { IntroductionComponent } from './components/introduction/introduction.component';


@NgModule({
  declarations: [
    ServicesComponent,
    PlataformComponent,
    CycleComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
