import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataUser, SignInUser, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_SIGNUP = "http://localhost:3000/api/auth/signup"
  API_SIGNIN = "http://localhost:3000/api/auth/signin"
  API_USER = "http://localhost:3000/api/auth/"
  
  constructor(private http : HttpClient) {

  }
  getAll():Observable<User>{
    return this.http.get<User>(`${this.API_USER}`)
  }
  getUserById(id :number|string):Observable<User>{    
    return this.http.get<User>(`${this.API_USER}/${id}`)
  }
   signUp(user : DataUser):Observable<User>{
    return this.http.post<User>(`${this.API_SIGNUP}`,user)
  }
  createUser(user : DataUser):Observable<DataUser>{
    return this.http.post<DataUser>(`${this.API_SIGNUP}`,user)
  }
  deleteUser(id : number | undefined):Observable<User>{
    return this.http.delete<User>(`${this.API_USER}${id}`)
  }
  editUser(user:DataUser):Observable<DataUser>{
    return this.http.put<DataUser>(`${this.API_USER}edit/${user._id}`,user)
  }
  signIn(user : SignInUser):Observable<User>{
    return this.http.post<User>(`${this.API_SIGNIN}`,user)
  }
}
