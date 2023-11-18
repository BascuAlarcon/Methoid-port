import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';  

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'] 
})
export class FormComponent{
  constructor(private fb: FormBuilder){}

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }; 

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
