import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directive-custom/highlight.directive';
import { UnlessDirective } from './directive-custom/unless.directive';
import { DirectiveCustomComponent } from './directive-custom/directive-custom.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ChildrenContentComponent } from './children-content/children-content.component';
import { DropdownDirective } from './directive-custom/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerComponent } from './servers/server/server.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './alert/placeholder/placeholder.directive';
import { SharedModule } from './shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveCustomComponent,
    HeaderComponent,
    RecipesComponent,
    HighlightDirective,
    UnlessDirective,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ChildrenContentComponent,
    DropdownDirective,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ServerComponent,
    ShortenPipe,
    FilterPipe,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    // AuthModule
  ],
  providers: [
    // AccountsService, 
    // LoggingService, 
    // AuthService, 
    // AuthGuard, 
    // CanDeactivateGuard, 
    // ServersService, 
    // ServerResolver,
    // {
    //   provide: HTTP_INTERCEPTORS, // run first
    //   useClass: AuthInterceptorService,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS, // run second
    //   useClass: LogginInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
  // entryComponents: [
  //   AlertComponent
  // ]
})
export class AppModule { }
