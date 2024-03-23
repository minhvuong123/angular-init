import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./user/user.component";
import { EditServerComponent } from "./edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserComponent},
  // { path: 'auth', component: AuthComponent},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { 
    path: 'servers', 
    // canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard], 
    component: ServersComponent, 
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver }},
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}   
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent},
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found' }},
  { path: '**', redirectTo: "/not-found"},
  // { path: 'servers/:id/edit', component: EditServerComponent}
] 


@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}