import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { DataUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private form :FormBuilder,private authService : AuthService,private router : Router){

  }
  productForm = this.form.group({
    userName : ['', Validators.required],
    email : ['',[Validators.required, Validators.email]],
    role : ['',Validators.required],    
    password : ['', [Validators.required,Validators.minLength(6)]],
    
  })
 
  async onHandleSubmit(){
    if(this.productForm.invalid)return  
    try {
      await firstValueFrom(this.authService.createUser(this.productForm.value as any))
      alert("Create user successfully")
      this.router.navigate(['/admin/user']);
    } catch (error) {
      alert('Create user failed')
    }  
    
  }
}
