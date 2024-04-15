import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { IProduct } from '../models/products';
import { Data } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  API_URL = 'http://localhost:3000/api/product'
  user : any
  constructor(private http:HttpClient) { 
    this.user = JSON.parse(localStorage.getItem('user') || '');
   
  }

  getAll():Observable<Data>{
    return this.http.get<Data>(`${this.API_URL}`)
  }
  getProductHome():Observable<IProduct>{
    return this.http.get<IProduct>(` ${this.API_URL}?_page=1&_limit=5`)
  }
  
  addProduct(product:IProduct):Observable<IProduct>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.accessToken}`
    });
    
    return this.http.post<IProduct>(`${this.API_URL}`,product,{ headers })
  }
  deleteProduct(id:number|undefined):Observable<IProduct>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.accessToken}`
    });
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`,{headers})
  }
  editProduct(product:IProduct):Observable<IProduct>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.accessToken}`
    });
    return this.http.put<IProduct>(`${this.API_URL}/${product._id}`,product,{headers})
  }
  getProductById(id :number|string):Observable<IProduct>{    
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
}
