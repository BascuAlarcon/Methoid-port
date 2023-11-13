import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './page/home/home.component';
import { SharedModule } from '../../shared/shared.module'; 
import { OurClientsComponent } from '../../shared/components/our-clients/our-clients.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { OurServicesComponent } from './components/services/our-services.component';
import { OfferComponent } from './components/offer/offer.component';


@NgModule({
  declarations: [
    HomeComponent,
    OurClientsComponent,
    PresentationComponent,
    OurServicesComponent,
    OfferComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule,
  ]
})
export class WelcomeModule { }
