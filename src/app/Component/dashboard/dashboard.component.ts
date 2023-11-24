import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private userservice: UserService){ }

  user: any;
  ngOnInit(): void {
  
  }

  getUser(){
    this.userservice.getUser().subscribe(
      user => {
        console.log(user);
      },
      error =>{
        console.log(error);
      }
      
    )
  }

}
