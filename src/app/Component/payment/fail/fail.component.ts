import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {
  imagepath="assets/images/end.jpg";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
close(): void {this.router.navigate(['/user'])}
}
