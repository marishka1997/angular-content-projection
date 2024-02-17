import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleSlotContentProjectionComponent } from './single-slot-content-projection/single-slot-content-projection.component';
import { MultiSlotContentProjectionComponent } from './multi-slot-content-projection/multi-slot-content-projection.component';
import { ConditionalSlotContentProjectionComponent } from './conditional-slot-content-projection/conditional-slot-content-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleSlotContentProjectionComponent,
    MultiSlotContentProjectionComponent,
    ConditionalSlotContentProjectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
