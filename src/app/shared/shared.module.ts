import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';  
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    OurClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule,
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    OurClientsComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
