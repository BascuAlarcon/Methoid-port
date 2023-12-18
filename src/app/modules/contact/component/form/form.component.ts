import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';  
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

interface Contacto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'] 
})
export class FormComponent{ 
  constructor(private fb: FormBuilder){}
 
  contactos: Contacto[] = [ 
    {value: 'Mail', viewValue: 'Correo Electronico'},
    {value: 'Celular', viewValue: 'Número telefonico'},
  ];
 
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

  async send(e: Event){
    e.preventDefault();
    emailjs.init('fx28VXVHE-VvdzaSQ')
    let response = await emailjs.send("service_n9cspm7","template_li2vmx9", {
      name: this.formContact.get('name')?.value, 
      contacto: this.formContact.get('email')?.value, 
      asunto: this.formContact.get('asunto')?.value
      });
  }

  mail = false;
  phone = false;
  selected = ''; 
  value = '';

  onClickContacto(valor: String){
    this.mail=false
    this.phone=false  

    console.log(valor)

    if(this.selected === 'Mail'){
      this.mail = true;
    }
    if(this.selected === 'Celular'){
      this.phone = true;
    } 
 
  }

}
