import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  imagepath="assets/images/end.jpg";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  close(): void {this.router.navigate(['/user'])}
}
