import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = this.fb.group({
    name:['',[Validators.required]],
    acno:['',[Validators.required,Validators.minLength(3)]],
    pwd:['',[Validators.required]],
    pin:['',[Validators.required]],
  })


  constructor(private dataservice : DataService,
    private router:Router,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  getError(field){
    return this.registerForm.get(field).errors
    

  }
  register(){
    // if(this.registerForm.get('name').errors){
    //   console.log("name is ivalid")
    // }

    if(this.registerForm.valid){
    const result=this.dataservice.register(this.registerForm.value.name,this.registerForm.value.acno,this.registerForm.value.pwd,this.registerForm.value.pin);
    
    if(result){
      alert("succesfully created account")
      this.router.navigateByUrl("");
    }
  }
  else{
    alert("form is invalid")
  }
}
}



   
    
  
