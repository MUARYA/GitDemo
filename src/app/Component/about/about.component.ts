import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imagepath:string="assets/images/background.jpg";
  imagepath1:string="assets/images/background.jpg";
  imagepath2:string="assets/images/background.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
