import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { KeysPipe } from './pipes/keys.pipe';
import { TableComponent } from './dynamic-table/table/table.component';
import { LabelPipe } from './pipes/label.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    KeysPipe,
    TableComponent,
    LabelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
