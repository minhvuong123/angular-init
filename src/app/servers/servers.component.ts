import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  reload() {
    // this.router.navigate(['/servers', { relativeTo: this.route }], { queryParamsHandling: 'preserve' });

    // from /view1?page=1 to /view2?page=1
    // this.router.navigate(['/view2'], { queryParams: { page: 2 },  queryParamsHandling: "preserve"});
  }

}
