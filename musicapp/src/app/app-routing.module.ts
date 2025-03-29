import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CreateInstrumentComponent } from './create-instrument/create-instrument.component';
import { ListInstrumentComponent } from './list-instrument/list-instrument.component';
//import { ListAccessoryComponent } from './list-accessory/list-accessory.component';
import { DisplayInstrumentComponent } from './display-instrument/display-instrument.component';
import { EditInstrumentComponent } from './edit-instrument/edit-instrument.component';
import { DeleteInstrumentComponent } from './delete-instrument/delete-instrument.component';

const routes: Routes = [
 // { path: 'create', component: CreateInstrumentComponent },
  { path: 'list-instrument', component: ListInstrumentComponent },
  // { path: 'list-accessory', component: ListAccessoryComponent },
  { path: 'display/:id', component: DisplayInstrumentComponent },
  { path: 'edit/:accessory/:id', component: EditInstrumentComponent },
  { path: 'delete/:id', component: DeleteInstrumentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
