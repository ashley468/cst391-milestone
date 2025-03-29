import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ListAccessoryComponent } from './list-accessory/list-accessory.component';
import { ListInstrumentComponent } from './list-instrument/list-instrument.component';
import { CreateInstrumentComponent } from './create-instrument/create-instrument.component';
import { DisplayInstrumentComponent } from './display-instrument/display-instrument.component';
import { EditInstrumentComponent } from './edit-instrument/edit-instrument.component';
import { DeleteInstrumentComponent } from './delete-instrument/delete-instrument.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
   // ListAccessoryComponent,
    ListInstrumentComponent,
    CreateInstrumentComponent,
    DisplayInstrumentComponent,
    EditInstrumentComponent,
    DeleteInstrumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
