import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/products';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { SearchHomeService } from 'src/app/services/search-home.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products:any=[]
  searchText : any
  constructor(private productService : ProductServiceService,private searchService : SearchHomeService){    
    this.productService.getAll().subscribe({
      next:(data)=>{
        this.products = data.allProduct?.docs || []
      },
      error:(err)=>console.log(err)
    })
  }
  ngOnInit() {
    this.searchService.inputData$.subscribe(data => {
      // Nếu dữ liệu thay đổi từ bất kỳ nơi nào khác, cập nhật giá trị của inputData
      console.log(data)
      this.searchText = data;
    });
  }
}
