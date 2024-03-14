import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.errorMessage = this.router.snapshot.data['message'];
    this.router.data.subscribe((data: any) => {
      this.errorMessage = data.message;
    })
  }
}
