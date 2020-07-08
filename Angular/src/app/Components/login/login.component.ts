
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/Services/item.service';
import { AppRoutingModule } from 'src/app/app-routing.module';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  
  form: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }


  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      Name: [null, Validators.required],
      Password: [null, Validators.required]      
    });
  }

  onclick() 
  {
    // this.form.value.password,this.form.value.name
    console.log(this.form.value)
    // this.pSer.name=this.form.get('name').value;
    // this.pSer.password=this.form.get('password').value;    
      this.router.navigate(["./new-user"]);   
    }

  }



  
