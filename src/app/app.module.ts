import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from '../app/view/inicio/index/index.component';
import { PaginatePipe } from '../app/pipes/paginate.pipe'
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PaginatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
