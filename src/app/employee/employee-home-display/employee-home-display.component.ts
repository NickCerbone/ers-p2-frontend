import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'employee-home-display',
  templateUrl: './employee-home-display.component.html',
  styleUrls: ['./employee-home-display.component.css']
})
export class EmployeeHomeDisplayComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  hasLoggedIn(){
    return this.authService.isLoggedIn;
  }

  getRole(){
    return this.authService.role;
  }

}
