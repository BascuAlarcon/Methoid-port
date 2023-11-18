import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module'; 
import { ContactComponent } from './page/contact.component';
import { SharedModule } from 'src/app/shared/shared.module'; 
import { FormComponent } from './component/form/form.component';
import { LinksComponent } from './component/links/links.component'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ 
    ContactComponent, 
    FormComponent,
    LinksComponent, 
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule

  ]
})
export class ContactModule { }
