import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css'
})
export class EditServerComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
    // this.route.queryParams.subscribe();
    // this.route.fragment.subscribe();
  }
}
