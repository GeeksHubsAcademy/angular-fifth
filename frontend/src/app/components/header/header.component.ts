import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public userService: UserService,
    public router: Router
    ) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('authToken');
    this.userService.setUser({});
  }
  searchProducts(event) {
    const searchValue = event.target.search.value;
    this.router.navigate(['/products/search', searchValue]);
  }
}
