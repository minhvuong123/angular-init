import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./edit-server/edit-server.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./edit-server/can-deactivate-guard.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  { 
    path: 'servers', 
    canActivateChild: [AuthGuard], 
    component: ServersComponent, 
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver }},
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}   
    ]
  }
] 


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule {

}