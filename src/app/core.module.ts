
import { NgModule } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './edit-server/can-deactivate-guard.service';
import { ServersService } from './servers/servers.service';
import { ServerResolver } from './servers/server/server-resolver.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor';
import { LogginInterceptorService } from './logging-interceptor';

@NgModule({
  providers: [
    AccountsService, 
    LoggingService, 
    AuthService, 
    AuthGuard, 
    CanDeactivateGuard, 
    ServersService, 
    ServerResolver,
    {
      provide: HTTP_INTERCEPTORS, // run first
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, // run second
      useClass: LogginInterceptorService,
      multi: true
    }
  ],
})
export class CoreModule { }
