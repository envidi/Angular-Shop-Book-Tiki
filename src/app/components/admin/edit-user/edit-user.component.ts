import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { userDetail } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  constructor(
    private form :FormBuilder,
    private authService : AuthService,
    private router : Router,
    private route : ActivatedRoute){

  }
  userDetail :any
  productForm = this.form.group({
    userName : ['', Validators.required],
    email : ['',[Validators.required, Validators.email]],
    role : ['',Validators.required],    
    
    
  })
  async ngOnInit(){
    const {id} = this.route.snapshot.params
    if(id){
      try {
        this.userDetail = await firstValueFrom(this.authService.getUserById(id))
        const {user} = this.userDetail
        this.productForm.patchValue(user as userDetail)

        
      } catch (error) {
        console.log(error)
      }
    }
  }
  async onHandleSubmit(){
    if(this.productForm.invalid)return  
    const {user ={}} =  this.userDetail    
      const productEdit:any = {
        _id : user._id,...this.productForm.value,password : user.password
      }
      
      this.authService.editUser(productEdit).subscribe({
        next: ()=>{
          alert("Update user successfully")
          this.router.navigate(['/admin/user']);
        },
        error:(error)=>alert(error)
      })
      
    
   
  }
 
 
}
