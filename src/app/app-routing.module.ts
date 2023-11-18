import { NgModule } from '@angular/core';
 
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./modules/company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'copyrights',
    loadChildren: () => import('./modules/copyright/copyright.module').then(m => m.CopyrightModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
