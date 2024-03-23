
import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';
import { CommonModule } from '@angular/common';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    // import component herr
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  providers: [
    // LoggingService
  ],
  exports: [
    CommonModule,
    // LoggingService // import in here will separate when using lazy loading
    // export component here
  ]
})
export class SharedModule { }
// import to other modules, this module includes components use for al project
