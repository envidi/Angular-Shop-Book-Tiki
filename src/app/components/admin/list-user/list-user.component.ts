import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { DataUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users :DataUser[] = []
  constructor(private authService:AuthService){
    this.loadUsers()
  }
  async loadUsers(){
    try {
      const data: Data = await lastValueFrom(this.authService.getAll())
      
      console.log(data)
      this.users = data['user'] || [];
    } catch (error) {
      console.log(error)
    }

   
    
    // this.productService.getAll().subscribe({
    //   next:(data: {
    //       message: string, 
    //       allProduct: { 
    //         docs: IProduct[]
    //       }
    //     })=>{
    //       this.products = data.allProduct?.docs || [] ;
    //       console.log(this.products)
    //     },
    //   error:(err)=>console.log(err)
    // })
  }
  handleDelete(id:number|undefined){
    if(id){
      this.authService.deleteUser(id).subscribe({
        next:(data)=>{
          this.loadUsers()
          alert("delete user successfully")
        },
        error : (err)=> alert("delete user failed")
  
      })
    }
   
  }
}
