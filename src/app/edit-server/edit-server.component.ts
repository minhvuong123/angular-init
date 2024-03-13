import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css'
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  changesSaved = false;
  allowEdit = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
    // this.route.queryParams.subscribe();
    // this.route.fragment.subscribe();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      confirm("Do you want to discard the changes?")
      return true;
    }

    return false;
  }
}
