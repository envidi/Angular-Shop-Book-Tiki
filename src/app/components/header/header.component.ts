import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { SignInUser } from 'src/app/models/user';
import { SearchHomeService } from 'src/app/services/search-home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user !: SignInUser 
  searchText : any
  constructor(private route : Router,private searchService : SearchHomeService){
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user')|| '')

    }
    

  }
  ngOnInit() {
    this.searchService.inputData$.subscribe(data => {
      // Nếu dữ liệu thay đổi từ bất kỳ nơi nào khác, cập nhật giá trị của inputData
      this.searchText = data;
    });
  }
  updateDataService() {
    // Khi input thay đổi, cập nhật dữ liệu trong DataService
    this.searchService.updateInputData(this.searchText);
  }
  logOut(){
    localStorage.removeItem('user')
    this.route.navigate(['signin']);
  }
}
