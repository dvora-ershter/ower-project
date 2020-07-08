import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component(
{
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit 
{
  regiForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder) 
  { }
  ngOnInit(): void
  {  
    this.initForm();  
  }   
  initForm()
  {
    this.regiForm=this.fb.group({
      FirstName:[null,Validators.compose([Validators.required,Validators.minLength(2)])],
      LastName:[null,Validators.compose([Validators.required,Validators.minLength(2)])],
      Password:[null,Validators.required],
      PasswordAuthentication:[null,Validators.required],  
      Email:[null,Validators.compose([Validators.required,Validators.email])],  
      Phone:[null,Validators.compose([Validators.required,Validators.minLength(10)])]
    });
  } 
 
    // this.regiForm = fb.group({ 
    //   'FirstName':[null,Validators.required],
    //   'LastName':[null,Validators.required],
    //   'password':[null,Validators.required],
    //   'passwordAuthentication':[null,Validators.required],     
    //   'Email':[null, Validators.compose([Validators.required,Validators.email])],
    //   'PhoneNumber':[null,Validators.required]
    //   });
  
  onSubmit() 
  {
      
  }


}

// export function onlyNumbers(control:AbstractControl):{[Key:string]:any} | null{
//   let valid =false;
//   let c = 0;
//   for(let index = 0; index>=control.value.length;index++){
//     if(control.value[index]>'0'||control.value[index]<'9')
//     c++;
//   }
//   if(c>=1)
//   valid=true;
//   return valid ? null : {onlyNumbers: {valid: valid,value:control.value}
//   }}

