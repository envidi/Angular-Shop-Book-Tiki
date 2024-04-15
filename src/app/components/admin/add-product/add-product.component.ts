import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { FormBuilder,Validators  } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private form :FormBuilder,private productService : ProductServiceService,private router : Router){

  }
  productForm = this.form.group({
    name : ['', Validators.required],
    price : [0,[Validators.required, Validators.pattern(/^\d+$/)]],
    author : ['',Validators.required],
    sale :[0,[Validators.required, Validators.pattern(/^\d+$/)]],
    img : ['', [Validators.required]],
    desc : ['',Validators.required],
  })
 
  async onHandleSubmit(){
    if(this.productForm.invalid)return  
    try {
      await firstValueFrom(this.productService.addProduct(this.productForm.value as IProduct))
      alert("Create product successfully")
      this.router.navigate(['/admin'])

    } catch (error) {
      alert('Create product failed')
    }  
    
  }
}
