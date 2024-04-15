import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { IProduct } from 'src/app/models/products';
import { SearchHomeService } from 'src/app/services/search-home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  searchText : any
  products:IProduct[]=[]
  constructor(private productService : ProductServiceService,private searchService : SearchHomeService){    
    this.productService.getProductHome().subscribe({
      next:(data)=>{
        this.products = data.allProduct?.docs || []
        console.log(data)
       
       
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
