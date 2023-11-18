import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private fb: FormBuilder){}

  get name(){
    return this.formContact.get('name') as FormControl;
  }
  
  get email(){
    return this.formContact.get('email') as FormControl;
  }

  get asunto(){
    return this.formContact.get('asunto') as FormControl;
  }

  formContact = this.fb.group({
    'name': ['', [Validators.required]],  
    'email': ['', [Validators.required, Validators.email]],
    'asunto': ['', ],
  });

  send(){
    console.log('success');
  }
}
