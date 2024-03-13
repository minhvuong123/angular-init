import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    console.log(userId);
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      const userId1 = params['id'];
      console.log(userId1);
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
